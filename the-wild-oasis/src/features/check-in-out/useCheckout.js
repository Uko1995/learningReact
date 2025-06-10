import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckOut() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked out successfully!`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (error) => {
      toast.error(`Error checking out booking: ${error.message}`);
    },
  });

  return { checkout, isCheckingout };
}
