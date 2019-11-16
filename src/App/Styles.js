export const getAppHeaderStyles = (theme) => ({
  buttonStyle: {
    color: 'black',
    margin: theme.spacing(1),
  },
  rootStyle: {
    flexGrow: 1,
  },
  sloganImageStyle: {
    width: '100%',
  },
  titleStyle: {
    color: 'black',
    flexGrow: 1,
  },
  toolBarStyle: {
    backgroundColor: 'white',
  },
});

export const getPostListItemStyles = (theme) => ({
  iconStyle: {
    color: 'grey',
  },
  listItemAvatarStyle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginRight: theme.spacing(1),
  },
  listItemSecondaryActionStyle: {
    display: 'flex',
  },
  postScoreStyle: {
    color: 'grey',
  },
});
