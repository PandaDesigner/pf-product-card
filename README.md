## Ejemplo

```
import { ProductCard } from 'react-ts-product-card';
```

```tsx
<ProductCard
    product={product}
    initialValues={{ count: 4, maxCount: 10 }}
>
    {({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
        <>
            <ProductCard.Image imgs='' />
            <ProductCard.Title />
            <ProductCard.Buttons />
        </>
    )}
</ProductCard>
```
