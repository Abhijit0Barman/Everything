import { Skeleton, Stack } from "@chakra-ui/react";

function LoadingSkeleton() {
  return (
    <Stack data-cy="loading-indicator">
      {/* Add chakra-ui Skeleton components here */}
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
    </Stack>
  );
}

export default LoadingSkeleton;
