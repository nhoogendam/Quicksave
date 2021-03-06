import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px'
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  bottomCenter: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30
},
  image: {
    marginLeft: '15px',
  },
  buttonLogin: {
    marginLeft: 'auto',
    width: '10px'
  },
}));