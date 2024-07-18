import { useMutation } from "@tanstack/vue-query";
import { v4 as uuid } from "uuid";
import { COLLECTION_COMMENTS, DB_ID } from "~/app.constants";

/**
 * Hook for creating a new comment.
 *
 * @param refetch - Function to refetch data after the comment is created.
 * @returns An object with the `writeComment` function and the `commentRef` ref.
 */
export function useCreateComment({ refetch }: { refetch: () => void }) {
  // Access the store for the slideover
  const store = useDealSlideStore();

  // Create a ref to hold the comment text
  const commentRef = ref<string>();

  // Use the `useMutation` hook from Vue Query to create a mutation for adding a comment
  const { mutate } = useMutation({
    // Set the mutation key to include the comment text
    mutationKey: ["add comments", commentRef.value],
    // Define the function to create the document in the database
    mutationFn: () =>
      DB.createDocument(DB_ID, COLLECTION_COMMENTS, uuid(), {
        text: commentRef.value,
        deal: store.card?.id,
      }),
    // Define the function to run after the mutation is successful
    onSuccess: () => {
      refetch(); // Run the refetch function to update the data
      commentRef.value = ""; // Clear the comment text input
    },
  });

  /**
   * Function to write a comment.
   *
   * If the comment text is empty, it does nothing.
   * Otherwise, it triggers the mutation to add the comment.
   */
  const writeComment = () => {
    if (!commentRef.value) return;
    mutate();
  };

  // Return the `writeComment` function and the `commentRef` ref
  return {
    writeComment,
    commentRef,
  };
}
