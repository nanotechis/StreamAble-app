import { ScrollView } from "react-native";
import React from "react";
import { TestTrendingArray } from "../../utils/testData";
import { Card } from "../../components";
import { Container, Title } from "../Container.styles";

const Popular = () => {
  return (
    <Container>
      <Title>Popular right now</Title>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {TestTrendingArray.results.map((item, i) => (
          <Card key={item.id} {...item} index={i} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Popular;
