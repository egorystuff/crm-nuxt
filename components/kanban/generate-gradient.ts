/**
 * Generates a column style based on the index and total number of columns.
 * The style is a gradient background color that transitions from dark blue to light blue.
 *
 * @param {number} index - The index of the column.
 * @param {number} [total=1] - The total number of columns. Defaults to 1.
 * @return {Object} The generated column style object.
 */
export const generateColumnStyle = (index: number, total = 1) => {
  // Calculate the intensity of the color based on the index and total number of columns.
  // The intensity decreases as the index increases.
  const intensity = 100 - (index / (total - 1)) * 50;

  // Generate the background color using HSL (hue, saturation, lightness) color model.
  // The hue is fixed at 280 (blue), saturation is 52%, and lightness decreases as the index increases.
  return { backgroundColor: `hsla(280, 52%, ${intensity}%, 30%)` };
};
