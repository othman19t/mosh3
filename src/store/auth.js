// 1) adding the action types
const BUG_ADDED = "BUG_ADDED";
const BUG_REMOVED = "BUG_REMOVED";
const BUG_RESOLVED = "BUG_RESOLVED";

// 2) adding actions
export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    description,
    resolved: false,
  },
});

export const bugRemoved = (id) => ({
  type: BUG_REMOVED,
  payload: { id },
});

export const bugResolved = (id) => ({
  type: BUG_RESOLVED,
  payload: { id },
});
