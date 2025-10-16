import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PageContainer, Card, Button } from "../../App.styles";

const ResultsTable = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Card>
        <h1>📊 Таблиця результатів</h1>
        <p>Сторінка в розробці...</p>
        <Button variant="primary" onClick={() => navigate(`/user/${userId}`)}>
          На головну
        </Button>
      </Card>
    </PageContainer>
  );
};

export default ResultsTable;
