import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api';


const Row1 = () => {

  const { data } = useGetKpisQuery(); //this will give an api call. 
  console.log("data:",data);
  return (
    <>
        <DashboardBox gridArea="a" />
        <DashboardBox gridArea="b" />
        <DashboardBox gridArea="c" />
    </>
  );
};

export default Row1;
