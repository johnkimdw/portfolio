// Cooking photos, generated from photos/cooking/ by scripts/process-photos.js.
import photos from './generated/cooking.json';

const cookingData = photos.map(p => ({ ...p, image: p.src }));

export default cookingData;
