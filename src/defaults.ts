export const DEFAULT_MESSAGE =
  "@{author} Your branch [{branchName}]({branchUrl}) hasn't been updated in the last 60 days and is marked as stale. It will be removed in a week.\r\nIf you want to keep this branch around, delete this comment or add new commits to this branch.";

export const DEFAULT_PROTECTED_BRANCHES = "^(master|main)$";

export const DEFAULT_OPERATIONS_PER_RUN = 10;
export const DEFAULT_DAYS_BEFORE_DELETE = 7;
export const DEFAULT_DAYS_BEFORE_STALE = 90;