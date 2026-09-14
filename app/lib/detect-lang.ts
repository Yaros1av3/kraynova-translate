import { headers } from 'next/headers';
import { Lang } from '../types';

/**
 * Определяет язык по заголовку Accept-Language браузера (на сервере).
 * Используется и в layout.tsx (для <html lang>), и в page.tsx (для начального
 * рендера контента) — оба места вызывают одну и ту же функцию, поэтому
 * значения всегда совпадают друг с другом.
 */
export async function detectLangFromHeaders(): Promise<Lang> {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') ?? '';
  const primary = acceptLanguage.split(',')[0]?.trim().toLowerCase() ?? '';
  return primary.startsWith('de') ? 'de' : 'ru';
}

/**
 * Валидирует значение query-параметра ?lang= — возвращает 'de' | 'ru' только
 * если оно ровно такое, иначе undefined (считаем, что параметра нет).
 */
export function parseLangParam(value: string | string[] | undefined): Lang | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw === 'de' || raw === 'ru' ? raw : undefined;
}