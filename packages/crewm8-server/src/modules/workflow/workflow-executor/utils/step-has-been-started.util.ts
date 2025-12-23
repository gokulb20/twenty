import { isDefined } from 'crewm8-shared/utils';
import { StepStatus, type WorkflowRunStepInfos } from 'crewm8-shared/workflow';

export const stepHasBeenStarted = (
  stepId: string,
  stepInfos: WorkflowRunStepInfos,
) => {
  return (
    isDefined(stepInfos[stepId]?.status) &&
    stepInfos[stepId].status !== StepStatus.NOT_STARTED
  );
};
