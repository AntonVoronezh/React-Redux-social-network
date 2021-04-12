import {
  ADD_DIALOG,
  ADD_NEW_DIALOG_TEXT,
  AddDialogActionType,
  AddNewDialogTextActionType,
} from "../actions/dialogs";
import { Action, AnyAction } from "redux";

type DialogsItemType = {
  id: number;
  name: string;
};

type ActionsTypes =
  | AddDialogActionType
  | AddNewDialogTextActionType
  | AddDialogActionType;

type MessagesItemType = {
  id: number;
  text: string;
};

type InitialStateType = {
  dialogs: DialogsItemType[];
  messages: {
    1: MessagesItemType[];
    2: MessagesItemType[];
    3: MessagesItemType[];
    4: MessagesItemType[];
    5: MessagesItemType[];
  };
  newDialogText: string;
};

const initialState: InitialStateType = {
  dialogs: [
    { id: 1, name: "Artur" },
    { id: 2, name: "John" },
    { id: 3, name: "Sara" },
    { id: 4, name: "Mary" },
    { id: 5, name: "Ivan" },
  ],
  messages: {
    1: [
      {
        id: 1,
        text:
          "CoderDojo is a volunteer-led, open-source programming club, now 160+ dojos in Japan",
      },
      {
        id: 2,
        text:
          "Открыть все курсы от Codedojo. К сожалению, при загрузке ... все «просто компоненты»",
      },
      {
        id: 3,
        text:
          "odeDojo - это место, в котором Вы сможете овладеть этим искусством! .",
      },
    ],
    2: [
      {
        id: 1,
        text:
          "A website of suggested ideas for code dojo events at the London Clojurians. View on GitHub. Welcome to London Clojurians Code Dojo. At a code ...",
      },
      {
        id: 2,
        text:
          "GitHub is a web-based Git repository hosting service, which offers all of the distributed revision control and source code management (SCM) functionality of Git ...",
      },
      {
        id: 3,
        text:
          "Teenage Lawnmower (source). Novashell (source). Proton SDK (source). Full list of Seths Ludumdare games with their sources · Seths github ...",
      },
    ],
    3: [{ id: 1, text: "nothing" }],
    4: [{ id: 1, text: "nothing FFF" }],
    5: [{ id: 1, text: "nothing ???" }],
  },

  newDialogText: "+++",
};

const reducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ADD_DIALOG: {
      const newDialog = {
        // @ts-ignore
        id: state.messages[action.payload].length + 1,
        text: state.newDialogText,
      };
      return {
        ...state,
        messages: {
          ...state.messages,
          // @ts-ignore
          [action.payload]: [...state.messages[action.payload], newDialog],
        },
        newDialogText: "",
      };
    }
    case ADD_NEW_DIALOG_TEXT: {
      return {
        ...state,
        newDialogText:
          action.payload !== null
            ? state.newDialogText + action.payload
            : state.newDialogText.substr(0, state.newDialogText.length - 1),
      };
    }

    default:
      return state;
  }
};

export default reducer;
