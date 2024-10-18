export const handle_electronic_products = (req, res, next) => {
    const originalSend = res.send;

    res.send = function(data) {
        if (res.statusCode === 300 && data) {
            let products;
            
            try {
                products = typeof data === 'string' ? JSON.parse(data) : data;
            } catch (error) {
                return next(error);
            }

            const electronicProducts = products.filter(product => product.electronics === true);

            if (electronicProducts.length > 0) {
                const response = {
                    message: "Múltiples productos electrónicos encontrados",
                    count: electronicProducts.length,
                    products: electronicProducts
                };
                
                originalSend.call(this, response);
            } else {
                originalSend.call(this, data);
            }
        } else {
            originalSend.call(this, data);
        }
    };

    next();
};