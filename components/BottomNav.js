import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GroupIcon from '@material-ui/icons/Group';
import PaymentIcon from '@material-ui/icons/Payment';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
  },
});



export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} style={{ backgroundColor: "#FF5757", width: '100%', position: 'fixed', bottom: 0,}}>
      <BottomNavigationAction label="Teams" value="Teams" icon={<GroupIcon />} style={{ color: "white" }}/>
      <BottomNavigationAction label="Resources" value="Resources" icon={<PaymentIcon />} style={{ color: "white" }}/>
      <BottomNavigationAction label="Ranking" value="Ranking" icon={<StarHalfIcon />} style={{ color: "white" }}/>
    </BottomNavigation>
  );
}
