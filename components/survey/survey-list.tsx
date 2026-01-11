import { Container } from "@/components/ui/container";
import { SURVEY_DATA } from "@/constants/form";
import { SurveyCard } from "./survey-card";

export function SurveyList() {
    return (
        <Container gap="s16">
            {SURVEY_DATA.map((item, i) => (
                <SurveyCard key={item.id} {...item} index={i + 1} />
            ))}
        </Container>
    );
}