import { useQuery } from "@tanstack/vue-query";
import { COLLECTION_DEALS, DB_ID } from "~/app.constants";

/**
 * Hook to fetch comments for a specific card.
 *
 * @returns {UseQueryResult<IDeal>} The result of the query.
 */
export function useComments() {
  // Get the store for dealing with slideover
  const store = useDealSlideStore();

  // Get the card ID, or an empty string if it's not defined
  const cardId = store.card?.id || "";

  // Use the useQuery hook to fetch the comments for the card
  // The queryKey is an array with the string 'deal' and the card ID
  // The queryFn is a function that fetches the card using the DB.getDocument method
  return useQuery({
    queryKey: ["deal", cardId], // The key used to identify the query in the cache
    queryFn: () => DB.getDocument(DB_ID, COLLECTION_DEALS, cardId), // The function that fetches the data
  });
}
