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

// 3) adding reducer
let lastId = 0;
export const reducer = (state = [], action) => {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: lastId + 1,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id === action.payload.id);

    case BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
  }

  return state;
};
