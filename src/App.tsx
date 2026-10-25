import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { TetelCard } from './components/TetelCard';
import { TetelDetailDrawer } from './components/TetelDetailDrawer';
import { Footer } from './components/Footer';
import { TETELEK } from './data/tetelek';
import { Tetel, FilterState } from './types/math';
import { OralExamGuideModal } from './components/OralExamGuideModal';
import { SearchX } from 'lucide-react';

const STORAGE_FAVS = 'omp_matek_favs';
const STORAGE_COMP = 'omp_matek_comp';

const readStoredIds = (key: string): string[] => {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
};

const EMPTY_FILTERS: FilterState = {
  searchQuery: '',
  category: 'Összes',
  onlyFavorites: false,
  onlyCompleted: false,
};

export const App: React.FC = () => {
  const [tetelek, setTetelek] = useState<Tetel[]>(() => {
    const favIds = readStoredIds(STORAGE_FAVS);
    const compIds = readStoredIds(STORAGE_COMP);

    return TETELEK.map(t => ({
      ...t,
      isFavorite: favIds.includes(t.id),
      isCompleted: compIds.includes(t.id),
    }));
  });

  const [filterState, setFilterState] = useState<FilterState>(EMPTY_FILTERS);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [drawerSpecialPage, setDrawerSpecialPage] = useState<'none' | 'memorize' | 'oral' | 'essay'>('none');
  const [showOralGuide, setShowOralGuide] = useState(false);

  const openTetel = (id: string, page: 'none' | 'memorize' | 'oral' | 'essay' = 'none') => {
    setDrawerSpecialPage(page);
    setSelectedId(id);
  };
  const listRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Persist favorites and completed topics
  useEffect(() => {
    const favs = tetelek.filter(t => t.isFavorite).map(t => t.id);
    const comps = tetelek.filter(t => t.isCompleted).map(t => t.id);
    try {
      localStorage.setItem(STORAGE_FAVS, JSON.stringify(favs));
      localStorage.setItem(STORAGE_COMP, JSON.stringify(comps));
    } catch {
      // Storage can be unavailable (private mode / quota); the app keeps working in memory.
    }
  }, [tetelek]);

  // The drawer always reads the live topic, so toggling never shows stale state.
  const selectedTetel = useMemo(
    () => (selectedId ? tetelek.find(t => t.id === selectedId) ?? null : null),
    [selectedId, tetelek]
  );

  // Handlers
  const toggleFavorite = (id: string) => {
    setTetelek(prev => prev.map(t => (t.id === id ? { ...t, isFavorite: !t.isFavorite } : t)));
  };

  const toggleCompleted = (id: string) => {
    setTetelek(prev => prev.map(t => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t)));
  };

  const scrollTo = (element: HTMLElement | null) => {
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Wait for the filtered list to render before scrolling, otherwise the
  // previous (longer) layout decides the final scroll position.
  const scrollToList = () => {
    requestAnimationFrame(() => requestAnimationFrame(() => scrollTo(listRef.current)));
  };

  const focusSearch = () => {
    scrollTo(searchRef.current);
    window.setTimeout(() => document.getElementById('search-input')?.focus(), 250);
  };

  const showFavorites = () => {
    setFilterState({ ...EMPTY_FILTERS, onlyFavorites: true });
    scrollToList();
  };

  const showCompleted = () => {
    setFilterState({ ...EMPTY_FILTERS, onlyCompleted: true });
    scrollToList();
  };

  // Filtered tetelek calculation
  const filteredTetelek = useMemo(() => {
    return tetelek.filter(t => {
      // Search query filter (matches title, tags, summary, number)
      if (filterState.searchQuery.trim()) {
        const query = filterState.searchQuery.toLowerCase();
        const matchTitle = t.title.toLowerCase().includes(query);
        const matchSummary = t.summary.toLowerCase().includes(query);
        const matchTags = t.tags.some(tag => tag.toLowerCase().includes(query));
        const matchNumber = t.number.toString() === query || `tétel ${t.number}`.includes(query);
        if (!matchTitle && !matchSummary && !matchTags && !matchNumber) {
          return false;
        }
      }

      // Category filter
      if (filterState.category !== 'Összes' && t.category !== filterState.category) {
        return false;
      }

      // Favorites
      if (filterState.onlyFavorites && !t.isFavorite) {
        return false;
      }

      // Completed
      if (filterState.onlyCompleted && !t.isCompleted) {
        return false;
      }

      return true;
    });
  }, [tetelek, filterState]);

  const completedCount = tetelek.filter(t => t.isCompleted).length;
  const favoriteCount = tetelek.filter(t => t.isFavorite).length;

  return (
    <div className="min-h-screen bg-omp-dark text-gray-100 flex flex-col font-sans selection:bg-omp-accent/30 selection:text-omp-accent">
      {/* Top Navbar */}
      <Navbar
        onSearchClick={focusSearch}
        onOpenGuide={() => setShowOralGuide(true)}
        onShowFavorites={showFavorites}
        onShowCompleted={showCompleted}
        favoritesCount={favoriteCount}
        completedCount={completedCount}
        totalCount={tetelek.length}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {/* Hero Header */}
        <Header onOpenGuide={() => setShowOralGuide(true)} />

        {/* Filter and Search Toolbar */}
        <div ref={searchRef} className="scroll-mt-16">
          <FilterBar
            filters={filterState}
            setFilters={setFilterState}
            totalCount={tetelek.length}
            filteredCount={filteredTetelek.length}
          />
        </div>

        {/* Content Section */}
        <div ref={listRef} className="scroll-mt-32 pt-6">
          {filteredTetelek.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTetelek.map(tetel => (
                <TetelCard
                  key={tetel.id}
                  tetel={tetel}
                  onSelect={() => openTetel(tetel.id, 'none')}
                  onOpenMemorize={() => openTetel(tetel.id, 'memorize')}
                  onOpenOralPlan={() => openTetel(tetel.id, 'oral')}
                  onOpenEssay={() => openTetel(tetel.id, 'essay')}
                  onToggleFavorite={toggleFavorite}
                  onToggleCompleted={toggleCompleted}
                />
              ))}
            </div>
          ) : (
            <div className="bg-omp-card border border-omp-border/60 rounded-2xl p-12 text-center my-8 shadow-xl max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-omp-border/40 border border-omp-border flex items-center justify-center mx-auto mb-4 text-omp-muted">
                <SearchX size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Nincs találat a megadott feltételekre</h3>
              <p className="text-gray-400 text-sm mb-6">
                Próbálj meg más keresési kifejezést használni, vagy töröld a kiválasztott szűrőket!
              </p>
              <button
                onClick={() => setFilterState(EMPTY_FILTERS)}
                className="px-5 py-2.5 bg-omp-border/60 hover:bg-omp-border text-white text-sm font-medium rounded-xl transition-all"
              >
                Szűrők alaphelyzetbe állítása
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Tetel Detail Drawer / Modal */}
      {selectedTetel && (
        <TetelDetailDrawer
          tetel={selectedTetel}
          initialSpecialPage={drawerSpecialPage}
          onClose={() => {
            setSelectedId(null);
            setDrawerSpecialPage('none');
          }}
          onToggleFavorite={toggleFavorite}
          onToggleCompleted={toggleCompleted}
        />
      )}
      <OralExamGuideModal isOpen={showOralGuide} onClose={() => setShowOralGuide(false)} />
    </div>
  );
};

export default App;
