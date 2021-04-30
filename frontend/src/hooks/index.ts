import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from "../store/action-creators";
import { RootState } from "../store/reducers";

export const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch)
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector