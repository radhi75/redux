import { Container, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { FILTER } from "../Constant";
import { setFilter } from "../redux/reducer/actions";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Container centerContent>
      <Tabs>
        <TabList>
          {Object.keys(FILTER).map((filterkey) => {
            const currentFilter = FILTER[filterkey];
            return (
                <Tab key={`filter-${currentFilter}`} onClick={()=>dispatch(setFilter(currentFilter))}>
                {currentFilter}
            </Tab>);
          })}
        </TabList>
      </Tabs>
    </Container>
  );
};

export default Filter;
