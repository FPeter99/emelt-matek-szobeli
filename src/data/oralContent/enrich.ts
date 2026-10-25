import { Tetel } from '../../types/math';
import byNumber from './byNumber.json';

type OralBundle = {
  continuousEssay: string;
  memorizationMaterial: string;
  oralExamPlan: string;
};

const bundles = byNumber as Record<string, OralBundle>;

/** Overlay onebefüggő kidolgozás + bemagolandó + feleletvázlat onto base tételek. */
export function enrichTetelekWithOralContent(tetelek: Tetel[]): Tetel[] {
  return tetelek.map((tetel) => {
    const bundle = bundles[String(tetel.number)];
    if (!bundle) return tetel;
    return {
      ...tetel,
      continuousEssay: bundle.continuousEssay,
      memorizationMaterial: bundle.memorizationMaterial,
      oralExamPlan: bundle.oralExamPlan,
    };
  });
}
