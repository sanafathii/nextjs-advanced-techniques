# Skeleton Loading

## Goal

The goal of this section is to explore how to implement Skeleton Loading in a more maintainable way while minimizing Layout Shift.

## Common Approach

A common approach is to create a separate Skeleton component for each UI component.

For example, a `ProductCard` would have its own `ProductCardSkeleton`.

Although this approach is simple, it introduces some challenges:

- More code to implement and maintain
- Design changes need to be applied to both components
- Responsive changes need to be handled in both components
- The Skeleton can become out of sync with the actual UI

## The Main Challenge: CLS

**CLS (Cumulative Layout Shift)** measures unexpected layout movement during page loading.

If the Skeleton and the final content have different dimensions, the layout may shift when the data is loaded.

This can make the page feel unstable and negatively affect the user experience.

Therefore, a good Skeleton should preserve the dimensions and structure of the final UI as much as possible.

## A Different Approach

Instead of completely separating the Skeleton from the original component, CSS can be used to control the Loading State while keeping the main component structure.

One useful CSS feature for this approach is the `:has()` pseudo-class.

`:has()` allows a parent element to react based on the elements inside it, making it possible to apply loading-related styles from the outer component.

## Key Takeaways

- Skeleton Loading improves the perceived loading experience.
- Separate Skeleton components can increase maintenance costs.
- Skeleton dimensions should closely match the final UI.
- Poorly implemented Skeletons can cause Layout Shift.
- `:has()` can help manage Loading States while keeping the component structure closer to the final UI.
- The main goal is to create a stable and maintainable loading experience.
