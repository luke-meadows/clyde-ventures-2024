import {
  DebtStrategyCustomSolutionBlurb,
  DueDiligenceCustomSolutionBlurb,
  MarginOptimisationCustomSolutionBlurb,
  ProductDesignCustomSolutionBlurb,
  SalesStrategyCustomSolutionBlurb,
} from './CustomSolutionBlurbs';

export default function CustomSolutionBlurb({ solution }) {
  return (
    <div>
      {solution === 'sales-strategy' && <SalesStrategyCustomSolutionBlurb />}
      {solution === 'debt-strategy' && <DebtStrategyCustomSolutionBlurb />}
      {solution === 'margin-optimisation' && (
        <MarginOptimisationCustomSolutionBlurb />
      )}
      {solution === 'due-diligence' && <DueDiligenceCustomSolutionBlurb />}
      {solution === 'product-design' && <ProductDesignCustomSolutionBlurb />}
    </div>
  );
}
