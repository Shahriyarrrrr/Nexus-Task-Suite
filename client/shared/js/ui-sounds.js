import { soundClick, soundSuccess, soundError, soundNotify } from "./sounds.js";

export const UISounds = {
  click(){ soundClick.currentTime = 0; soundClick.play(); },
  success(){ soundSuccess.currentTime = 0; soundSuccess.play(); },
  error(){ soundError.currentTime = 0; soundError.play(); },
  notify(){ soundNotify.currentTime = 0; soundNotify.play(); }
};
