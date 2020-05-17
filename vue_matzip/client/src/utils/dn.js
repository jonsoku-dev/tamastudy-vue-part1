/*
@ type
@ - error
@ - success
*/

export default (dispatch, type, msg) => {
  const cn = () => {
    const payload = {
      type,
      msg,
    };
    return payload;
  };
  dispatch("notificationState/add", cn(), {
    root: true,
  });
};
