import Dialogs from "../../components/pages/Dialogs/Dialogs";
import { connect } from "react-redux";

import { addDialogAC, addNewDialogTextAC } from "../../store/actions/dialogs";
import { AppStateType } from "../../store/reducers/root";

const mapStateToProps = ({ dialogs }: AppStateType): any => {
  return {
    ...dialogs,
  };
};

const mapDispatchToProps = (dispatch: any): any => {
  return {
    addDialogCB: (id: number) => dispatch(addDialogAC(id)),
    addNewDialogTextCB: (text: string) => dispatch(addNewDialogTextAC(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
