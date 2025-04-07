// A simple task that could occur in real-world scenarios.
type TCandidate = {
  desiresEquity: boolean;
  currentLocation: string;
  desiredLocations: string[];
};

type TJob = {
  equityMax: number;
  locations: string[];
};

const candidates: TCandidate[] = [
  {
    desiresEquity: true,
    currentLocation: "New York",
    desiredLocations: ["San Francisco", "Los Angeles", "Colorado"],
  },
  {
    desiresEquity: false,
    currentLocation: "San Francisco",
    desiredLocations: ["Kentucky", "New Mexico"],
  },
];

/*
 * Create a function `match` that takes a job and filters a list of candidates to only include those who match the job requirements.
 * Essentially, this means filtering the candidate list based on the job criteria.
 *
 * - If a candidate desires equity, check if `job.equityMax` is greater than 0.
 * - The candidate's `currentLocation` or `desiredLocations` should match any of the locations listed in `job.locations`.
 *
 * The function should return a list of candidates that meet these criteria.
 */
const match = (job: TJob, candidates: TCandidate[]) => {
  // Convert to O(1) to eliminate one O(n) by using array.includes

  const jobLocationList = new Set(job.locations);

  const filtered = candidates.filter((candidate) => {
    if (candidate.desiresEquity && job.equityMax <= 0) return false;

    const haveCommonLocation =
      jobLocationList.has(candidate.currentLocation) ||
      candidate.desiredLocations.some((location) =>
        jobLocationList.has(location),
      );

    if (!haveCommonLocation) return false;

    return true;
  });

  return filtered;
};
