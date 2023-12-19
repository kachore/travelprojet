import React, { createContext, useContext, useReducer } from "react";

const TravelContext = createContext();

const initialState = {
  entries: [],
};

const travelReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return { entries: [...state.entries, action.payload] };
    case "UPDATE_ENTRY":
      const updatedEntries = state.entries.map((entry) =>
        entry.id === action.payload.entryId
          ? { ...entry, ...action.payload.updatedEntry }
          : entry
      );
      return { entries: updatedEntries };
    case "DELETE_ENTRY":
      const filteredEntries = state.entries.filter(
        (entry) => entry.id !== action.payload
      );
      return { entries: filteredEntries };
    default:
      return state;
  }
};

const TravelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(travelReducer, initialState);

  const addEntry = (newEntry) => {
    dispatch({ type: "ADD_ENTRY", payload: newEntry });
  };

  const updateEntry = (entryId, updatedEntry) => {
    dispatch({ type: "UPDATE_ENTRY", payload: { entryId, updatedEntry } });
  };

  const deleteEntry = (entryId) => {
    dispatch({ type: "DELETE_ENTRY", payload: entryId });
  };

  return (
    <TravelContext.Provider
      value={{ entries: state.entries, addEntry, updateEntry, deleteEntry }}
    >
      {children}
    </TravelContext.Provider>
  );
};

const useTravelContext = () => {
  const context = useContext(TravelContext);
  if (!context) {
    throw new Error("useTravelContext must be used within a TravelProvider");
  }
  return context;
};

export { TravelProvider, useTravelContext };
