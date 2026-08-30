export type MenuItem = { name: string; description?: string; price?: string; note?: string }
export type MenuSection = { id: string; title: string; subtitle?: string; items: MenuItem[] }

// Transcribed verbatim from the official Racine Créole menu PDFs. This file is the single source of truth.
// Do NOT add items that are not printed on the official menu.
// Single-price items use `price` (rendered with a "$" suffix). Items with size/format variants
// keep the per-format pricing in `description` and leave `price` empty.
export const menuSections: MenuSection[] = [
  { id: 'entrees', title: 'Entrées', items: [
    { name: 'Accras (1)', price: '1,50' },
    { name: 'Ailes de poulet', description: '(3) 6,99 $ · (6) 11,99 $ · (12) 21,99 $' },
    { name: 'Banane plantain (4)', price: '4,99' },
    { name: 'Burger plantain', price: '17,99' },
    { name: 'Cigare au bœuf', price: '2,50' },
    { name: 'Côtes levées', description: '(demi) 12,99 $ · (entière) 21,99 $' },
    { name: 'Cuisse de poulet (1)', price: '9,49' },
    { name: 'Dinde', price: '10,99' },
    { name: 'Griot', price: '8,49' },
    { name: 'Légumes', price: '9,99' },
    { name: 'Marinades (3)', price: '3,50' },
    { name: 'Poisson', price: '11,99' },
    { name: 'Poitrine de poulet', price: '10,49' },
    { name: 'Queue de bœuf', price: '12,99' },
    { name: 'Tassot cabrit', price: '15,99' },
    { name: 'Tassot bœuf', price: '15,99' },
  ]},
  { id: 'riz', title: 'Riz', items: [
    { name: 'Riz collé', description: '(P) 4,99 $ · (M) 7,99 $ · (G) 9,99 $' },
    { name: 'Riz djondjon', description: '(P) 6,99 $ · (G) 13,99 $' },
  ]},
  { id: 'salades', title: 'Salades', items: [
    { name: 'Salade macaroni', description: '(P) 4,99 $ · (M) 7,99 $ · (G) 11,99 $' },
    { name: 'Salade maison', price: '9,99' },
    { name: 'Salade poitrine de poulet', price: '19,99' },
  ]},
  { id: 'fritay', title: 'Fritay', subtitle: 'Servi avec bananes plantain. Ajoutez marinades et accras au choix.', items: [
    { name: 'Fritay ailes de poulet', description: 'Ailes (3) + plantain (6) 14,99 $ · + marinades 16,99 $ · + accras 17,99 $ · + accras + marinades 21,99 $' },
    { name: 'Fritay cuisse de poulet', description: 'Cuisse (1) + plantain (6) 16,99 $ · + marinades 19,99 $ · + accras 20,99 $ · + accras + marinades 23,99 $' },
    { name: 'Fritay griot', description: 'Griot + plantain (6) 16,99 $ · + marinades 18,99 $ · + accras 19,99 $ · + accras + marinades 22,99 $' },
    { name: 'Fritay dinde', description: 'Dinde + plantain (6) 17,99 $ · + marinades 20,99 $ · + accras 21,99 $ · + accras + marinades 25,99 $' },
    { name: 'Fritay tassot bœuf', description: 'Tassot bœuf + plantain (6) 22,49 $ · + marinades 24,99 $ · + accras 25,99 $ · + accras + marinades 29,99 $' },
    { name: 'Fritay tassot cabrit', description: 'Tassot cabrit + plantain (6) 22,49 $ · + marinades 24,99 $ · + accras 25,99 $ · + accras + marinades 29,99 $' },
    { name: 'Fritay poisson', description: 'Poisson + plantain (6) + accras (3) + marinades (3) — (M) 29,99 $ · (G) 39,99 $' },
  ]},
  { id: 'plats', title: 'Plats individuels', subtitle: 'Servis avec 2 bananes plantain, salade macaroni, riz et une sauce. Pikliz inclus avec le griot, la dinde, le tassot cabrit et le tassot bœuf.', items: [
    { name: 'Plat ailes de poulet', description: '(6) 17,99 $ · (12) 29,99 $' },
    { name: 'Plat côtes levées', description: '(demi) 22,50 $ · (entière) 32,99 $' },
    { name: 'Plat cuisse de poulet', description: '(1) 18,99 $ · (2) 23,99 $' },
    { name: 'Plat dinde', price: '24,99' },
    { name: 'Plat griot', description: '(P) 16,99 $ · (G) 21,99 $' },
    { name: 'Plat légumes', description: '(P) 17,99 $ · (G) 22,99 $' },
    { name: 'Plat poitrine de poulet', price: '22,99' },
    { name: 'Plat poisson', description: '(M) 29,99 $ · (G) 39,99 $' },
    { name: 'Plat tassot bœuf', price: '29,99' },
    { name: 'Plat tassot cabrit', price: '29,99' },
    { name: 'Plat queue de bœuf', price: '29,99' },
  ]},
  { id: 'partager', title: 'Plats à partager', items: [
    { name: 'Plat cuisse de poulet', price: '84,99' },
    { name: 'Plat griot', price: '76,99' },
    { name: 'Plat tassot cabrit', price: '117,99' },
    { name: 'Plateau jour du match', price: '149,99' },
    { name: 'Plateaux personnalisés', note: 'Sur demande' },
  ]},
  { id: 'burger', title: 'Burger', items: [
    { name: 'Burger plantain poulet', description: 'Au choix : frites, salade macaroni, riz ou salade maison', price: '24,99' },
  ]},
  { id: 'poutine', title: 'Poutine', items: [
    { name: 'Poutine', price: '10,99' },
    { name: 'Poutine griot', price: '18,99' },
    { name: 'Poutine poulet', price: '20,99' },
  ]},
  { id: 'pates', title: 'Pâtes', items: [
    { name: 'Pâtes créole', price: '14,99' },
    { name: 'Pâtes créole au poulet', price: '22,99' },
  ]},
  { id: 'extras', title: 'Extras & sauces', items: [
    { name: 'Sauce', description: '2 oz 1,50 $ · 4 oz 2,75 $' },
    { name: 'Pikliz', description: '1 oz 1,50 $ · 2 oz 2,75 $' },
    { name: 'Sauce piquante', price: '1,50' },
    { name: 'Sauce chipotle', price: '1,50' },
    { name: 'Légume mariné', price: '2,75' },
  ]},
  { id: 'desserts', title: 'Desserts', items: [
    { name: 'Desserts', price: '9,99' },
  ]},
  { id: 'boissons', title: 'Boissons', items: [
    { name: 'Eau (bouteille)', price: '1,99' },
    { name: 'Boissons gazeuses (canette)', description: 'Coke, Coke Zero, 7up, Sprite, Canada Dry, Ginger Ale, soda tonique, Crush Orange', price: '1,99' },
    { name: 'Boissons gazeuses importées', description: 'Cola Champagne, banane', price: '2,49' },
    { name: 'Jus maison', price: '2,49' },
    { name: 'Jus importés', description: 'Mangue, mangue-carotte, corossol, goyave, punch aux fruits, fruit de la passion', price: '3,49' },
    { name: 'Malta', price: '3,99' },
  ]},
  { id: 'bieres-vins', title: 'Bières & vins', items: [
    { name: 'Bière Prestige', price: '7,99' },
    { name: 'Bière Le Marron', price: '5,49' },
    { name: 'Vin rouge', description: 'Verre 10,49 $ · Bouteille 44,99 $' },
    { name: 'Vin blanc', description: 'Verre 10,49 $ · Bouteille 44,99 $' },
  ]},
  { id: 'spiritueux', title: 'Spiritueux & cocktails', items: [
    { name: '1800 Tequila', description: 'Verre 8,99 $ · Bouteille sur demande' },
    { name: 'Rhum Barbancourt', description: 'Verre 7,99 $ · Bouteille sur demande' },
    { name: 'Bombay Gin', description: 'Verre 7,99 $ · Bouteille sur demande' },
    { name: 'Grey Goose Vodka', description: 'Verre 8,99 $ · Bouteille sur demande' },
    { name: 'Jameson Whiskey', description: 'Verre 7,99 $ · Bouteille sur demande' },
    { name: 'Grand Marnier', description: 'Verre 7,99 $ · Bouteille sur demande' },
    { name: 'Cocktail maison', price: '12,99' },
    { name: 'Cocktail maison (pichet)', note: 'Sur demande' },
    { name: 'Mocktail maison', price: '6,99' },
  ]},
]

export const menuNotice = 'Les prix et la disponibilité peuvent changer sans préavis. Informez notre équipe de toute allergie ou restriction alimentaire.'
