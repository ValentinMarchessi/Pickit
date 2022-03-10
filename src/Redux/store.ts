import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { combineReducers } from "redux";
import { userReducer } from "./Reducers";

const persistConfig = {
    key: 'root',
    version: 1,
	storage,
	blacklist: ["user"],
}
const userPersistConfig = {
	key: "user",
	storage: storage,
	blacklist: ["error","token"],
};

const rootReducer = combineReducers({
	user: persistReducer(userPersistConfig,userReducer),
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export let persistor = persistStore(store);