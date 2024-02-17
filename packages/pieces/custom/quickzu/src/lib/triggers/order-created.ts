import {
  Property,
  TriggerStrategy,
  createTrigger,
} from '@activepieces/pieces-framework';
import { quickzuAuth } from '../../';

const markdown = `
- Go to the **Settings->API and Webhooks** section.
- In the webhook settings, paste this URL: 
  \`{{webhookUrl}}\`
- Click on **Save**.
`;
const sampleData = {
  payload: {
    id: '65cc96cfcf7028f638e20b0c',
    data: {
      id: '65cc96cfcf7028f638e20b0c',
      __v: 0,
      _id: '65cc96cfcf7028f638e20b0c',
      area: '63862620938a5552acce9e6b',
      shop: '5fbe833cef26b83b8f53b7c3',
      status: 'pending',
      currency: 'INR',
      customer: {
        phone: '9039101337',
        address: 'okay mumbai',
        full_name: 'Mohit',
      },
      order_id: 233312,
      products: [
        {
          id: '65cc96cfcf70280fbde20b0d',
          _id: '65cc96cfcf70280fbde20b0d',
          qty: 1,
          addon: [],
          amount: 10,
          product: {
            id: '5fbe8677ef26b83b8f53b7cf',
            __v: 0,
            _id: '5fbe8677ef26b83b8f53b7cf',
            mrp: 10,
            sku: '',
            desc: '',
            meta: { nonveg: false },
            name: 'Shrewsbury Cookies',
            shop: '5fbe833cef26b83b8f53b7c3',
            unit: 'gram',
            index: 0,
            price: 10,
            addons: [],
            status: true,
            options: [],
            picture:
              'https://d1mzjggyz5012h.cloudfront.net/quickzu.com/products/308790a53b3ca742_scookies.jpeg',
            category: '5fbe83acef26b83b8f53b7c7',
            variants: [],
            exclude_tax: false,
            availability: true,
            picture_thumb:
              'https://d1mzjggyz5012h.cloudfront.net/quickzu.com/products/308790a53b3ca742_scookies.jpeg?width=300',
            stock_enabled: false,
            value_per_unit: 200,
            available_stock: -1,
            enable_variants: true,
          },
          variant: [],
          createdAt: '2024-02-14T10:32:47.953Z',
          updatedAt: '2024-02-14T10:32:47.953Z',
        },
      ],
      coupon_id: '',
      createdAt: '2024-02-14T10:32:47.953Z',
      sub_total: 29,
      updatedAt: '2024-02-14T10:32:47.953Z',
      order_type: 'delivery',
      coupon_code: '',
      instruction: 'spicy food',
      payment_mode: 'paylater',
      taxes_amount: 2.9,
      total_amount: '31.90',
      currency_data: {
        code: 'INR',
        name: 'Indian Rupee',
        symbol: 'Rs',
        rounding: 0,
        name_plural: 'Indian rupees',
        symbol_native: '₹',
        decimal_digits: 2,
      },
      payment_status: 'unpaid',
      transaction_id: '',
      delivery_charges: 0,
      stripe_session_id: '',
      subtotal_discount: 0,
      item_level_discount: 0,
      razorpay_session_id: '',
    },
    shop: {
      id: '5fbe833cef26b83b8f53b7c3',
      __v: 0,
      _id: '5fbe833cef26b83b8f53b7c3',
      css: '',
      apps: { analytics: '' },
      desc: 'pastries, sandwiches, cake',
      link: 'ccake.quickzu.com',
      logo: 'https://d1mzjggyz5012h.cloudfront.net/quickzu.com/logos/a74e93e49cc56f69_cakelogo.jpg',
      name: 'Classic Cakes',
      alias: 'ccake',
      cover:
        'https://d1mzjggyz5012h.cloudfront.net/quickzu.com/covers/4b92ef0c7b90189b_pngtree-nutritional-food-top-view-simple-gray-banner-image_176015.jpg',
      phone: '916260494878',
      footer:
        '<!-- JSON-LD markup generated by Google Structured Data Markup Helper. -->\r\n<script type="application/ld+json">\r\n{\r\n  "@context": "http://schema.org",\r\n  "@type": "Product",\r\n  "name": "Classic Cakes",\r\n  "image": "https://diawyzyn3pk7s.cloudfront.net/covers/4b92ef0c7b90189b_pngtree-nutritional-food-top-view-simple-gray-banner-image_176015.jpg",\r\n  "description": "78 Washington St, Hoboken",\r\n  "brand": {\r\n    "@type": "Brand",\r\n    "name": "Classic Cakes",\r\n    "logo": "https://diawyzyn3pk7s.cloudfront.net/logos/a74e93e49cc56f69_cakelogo.jpg?width=300"\r\n  },\r\n  "offers": [\r\n    {\r\n      "@type": "Offer",\r\n      "price": "₹ 2.00"\r\n    },\r\n    {\r\n      "@type": "Offer",\r\n      "price": "₹ 3.00"\r\n    }\r\n  ]\r\n}\r\n</script>',
      header: '',
      timing: {
        '0': { end: '23:59', start: '00:00', status: true },
        '1': { end: '23:59', start: '00:00', status: false },
        '2': { end: '23:59', start: '00:00', status: true },
        '3': { end: '23:59', start: '00:00', status: true },
        '4': { end: '23:59', start: '00:00', status: true },
        '5': { end: '23:59', start: '00:00', status: true },
        '6': { end: '23:59', start: '00:00', status: true },
        createdAt: '2024-01-13T17:54:46.861Z',
        updatedAt: '2024-01-13T17:54:46.861Z',
      },
      address: '78 Washington St, Hoboken',
      country: 'IN',
      dine_in: true,
      domains: [],
      message: {
        dine_in:
          "Hi, I'd like to place an order 👇\n\n✅🏃🏽\n {{ORDER_TYPE}} *Order No: {{ORDER_NUMBER}}*\nfrom {{STORE_LINK}}\n--\n{{PRODUCTS}}\n Notes: {{ORDER_INSTRUCTION}}\n\n--\nItems Total: {{SUB_TOTAL}}\n    \nCoupon Discount: {{SUBTOTAL_DISCOUNT}}\n    \nItem Discount: {{ITEM_LEVEL_DISCOUNT}}\n    \nTaxes: {{TAXES}}\n    \nDelivery: {{DELIVERY}}\n    \n*Total: {{TOTAL}}*\n    \n\nCustomer Details🏃🏽\n\nName: {{CUSTOMER_NAME}}\nContact: {{CUSTOMER_PHONE}}\n    \nTable Number *{{TABLE_NUMBER}}*\n    \n\n---‐---------------------------------------\n\n{{STORE_NAME}} will confirm your order upon receiving the message. Here below are the payment options available 👇🏼.\n\nPayment Options 💳\n {{PAYMENT_INSTRUCTION}}\n\nPayment Method 💳\n {{PAYMENT_METHOD}}",
        pick_up:
          "Hi, I'd like to place an order 👇\n\n✅🏃🏽\n {{ORDER_TYPE}} *Order No: {{ORDER_NUMBER}}*\nfrom {{STORE_LINK}}\n--\n{{PRODUCTS}}\n Notes: {{ORDER_INSTRUCTION}}\n\n--\nItems Total: {{SUB_TOTAL}}\n    \nCoupon Discount: {{SUBTOTAL_DISCOUNT}}\n    \nItem Discount: {{ITEM_LEVEL_DISCOUNT}}\n    \nTaxes: {{TAXES}}\n    \nDelivery: {{DELIVERY}}\n    \n*Total: {{TOTAL}}*\n    \n\nCustomer Details🏃🏽\n\nName: {{CUSTOMER_NAME}}\nContact: {{CUSTOMER_PHONE}}\n    \nI will pick up this order at {{PICKUP_TIME}}\n    \n\n---‐---------------------------------------\n\n{{STORE_NAME}} will confirm your order upon receiving the message. Here below are the payment options available 👇🏼.\n\nPayment Options 💳\n {{PAYMENT_INSTRUCTION}}\n\nPayment Method 💳\n {{PAYMENT_METHOD}}",
        delivery:
          "Hi, I'd like to place an order 👇\n\n✅🏃🏽\n {{ORDER_TYPE}} *Order No: {{ORDER_NUMBER}}*\nfrom {{STORE_LINK}}\n--\n{{PRODUCTS}}\n Notes: {{ORDER_INSTRUCTION}}\n\n--\nItems Total: {{SUB_TOTAL}}\n    \nCoupon Discount: {{SUBTOTAL_DISCOUNT}}\n    \nItem Discount: {{ITEM_LEVEL_DISCOUNT}}\n    \nTaxes: {{TAXES}}\n    \nDelivery: {{DELIVERY}}\n    \n*Total: {{TOTAL}}*\n    \n\nCustomer Details🏃🏽\n\nName: {{CUSTOMER_NAME}}\nContact: {{CUSTOMER_PHONE}}\n    \nPlease deliver it to my address {{CUSTOMER_ADDRESS}}\n    \n\n---‐---------------------------------------\n\n{{STORE_NAME}} will confirm your order upon receiving the message. Here below are the payment options available 👇🏼.\n\nPayment Options 💳\n {{PAYMENT_INSTRUCTION}}\n\nPayment Method 💳\n {{PAYMENT_METHOD}}",
        appointment:
          "Hi, I'd like to make an appointment 👇\n\n✅🏃🏽\n *Apointment No: {{ORDER_NUMBER}}*\nfrom {{STORE_LINK}}\n--\n{{PRODUCTS}}\n Notes: {{ORDER_INSTRUCTION}}\n\n--\nItems Total: {{SUB_TOTAL}}\n    \nCoupon Discount: {{SUBTOTAL_DISCOUNT}}\n    \nItem Discount: {{ITEM_LEVEL_DISCOUNT}}\n    \nTaxes: {{TAXES}}\n    \nDelivery: {{DELIVERY}}\n    \n*Total: {{TOTAL}}*\n    \n\nCustomer Details🏃🏽\n\nName: {{CUSTOMER_NAME}}\nContact: {{CUSTOMER_PHONE}}\n    \nI will be there at {{APPOINTMENT_TIME}}\n    \n\n---‐---------------------------------------\n\n{{STORE_NAME}} will confirm your appointment upon receiving the message. Here below are the payment options available 👇🏼.\n\nPayment Options 💳\n {{PAYMENT_INSTRUCTION}}.\n\nPayment Method 💳\n {{PAYMENT_METHOD}}",
      },
      pick_up: true,
      category: 'restaurant',
      currency: 'INR',
      delivery: {
        cost: 0,
        free: 0,
        status: true,
        min_order: 0,
        is_free_delivery: true,
      },
      language: 'en',
      template: 'five',
      createdAt: '2020-11-25T16:15:56.049Z',
      is_closed: false,
      seller_id: {
        id: '5fbe8101ef26b83b8f53b7c1',
        __v: 0,
        _id: '5fbe8101ef26b83b8f53b7c1',
        hash: 'ffa2cd4a438e23809531052bd7accf45669be99982eed59baffff963fd2cb48367042071da26c4d0dc865735c2fdf64876c69897c08dbd4d220ad65679810cd6ae4f6a7ec71b8c46720da7e2de4420d1f5f5ee6440c34af36e1689414381e7d191df4ccdfd1c88bf1bb4004bfbbde7cf3cf094f25bf907bb275cdb11be89afe5ce2cf66a9a633d185401336784c471edf43f89c5f53e4461e9c0703186204167b7d622261738bc964d3be975fa45ab245e1ca0680cdcefd5cc25b079ac1416a9854c5a1c31cc567085c90144f542aa734d5a26c972d4dfe6fd9326841d9cd4c90d0db904eea5a8d19365f05c26082e362bb7d126022e1653a56f6fd33a4bccb576a84101b0167d20e95db019d6945d5ca12e96c339ca8cab22c18aa780c626ce32c18a0029ce5e7320e59dc3751c48f2e3be394b4f6c22e961bed035dae5cbea7d5f93582ce08d38e9182950725d4743f6f293faa3a4d9a6b0725195da1b21f48079da2a878c66b797d46d3bc7c44728e59f2dcc297ea118926f0355fe4c805541da5675b802d0022e76b334a461f4f2df6fc0673dac432fa27bf27b570c7005cd58dcaf7e62e217b00bf0872dbafb00d8b8c324b14d7f4d8ad879545870ecb3e546f8bb9112236862368d10cf794ced73a7397747d1df220ee5ec20626bb9eee2c271b1435c3e25ac61dda946678d4950a9361bd2d11132bb22e2a43bc44d91',
        salt: '4aa078be319a316ba11dfae6b8117f80',
        email: 'focix@getnada.com',
        language: 'en-us',
        password:
          '$2a$13$NwC..fYJpEmwtcmertejlu6E/I/8E8ryC2gKv8S0XJ5EN1rQ8TSHy',
        createdAt: '2020-11-25T16:06:25.546Z',
        full_name: 'focix',
        updatedAt: '2023-07-01T14:02:27.589Z',
        account_type: 'seller',
        is_email_verified: true,
      },
      updatedAt: '2024-01-29T10:22:46.775Z',
      is_blocked: false,
      logo_thumb:
        'https://d1mzjggyz5012h.cloudfront.net/quickzu.com/logos/a74e93e49cc56f69_cakelogo.jpg?width=300',
      receive_on: 'whatsapp',
      appointment: false,
      is_onlymenu: false,
      payment_inst: 'Pay Offline via UPI/CASH etc',
      currency_data: {
        code: 'INR',
        name: 'Indian Rupee',
        symbol: 'Rs',
        rounding: 0,
        name_plural: 'Indian rupees',
        symbol_native: '₹',
        decimal_digits: 2,
      },
      payment_modes: {
        stripe: {
          logo: '/public/assets/imgs/stripe.svg',
          name: 'stripe',
          enabled: true,
          test_mode: true,
          secret_key:
            'sk_test_51HK1rfLxC9RJsx0f53ARD7EdFRGBK2HH26uFoXNZ66tlwmGWkUaZxju2UfaIUnAd7jOnKogZXNrQZY3OvfbwjaL100IBjyBOYx',
          description: '',
          display_name: 'Stripe',
          publishable_key:
            'pk_test_51HK1rfLxC9RJsx0fH8vzV7BHKeem4wZw3i00K3NGSfn8cFN3fpDOaLaXntVMwt7URfTdOmzqjYsi40erLuRqpJ4D00ftojur6v',
          test_secret_key:
            'sk_test_51HK1rfLxC9RJsx0f53ARD7EdFRGBK2HH26uFoXNZ66tlwmGWkUaZxju2UfaIUnAd7jOnKogZXNrQZY3OvfbwjaL100IBjyBOYx',
          test_publishable_key:
            'pk_test_51HK1rfLxC9RJsx0fH8vzV7BHKeem4wZw3i00K3NGSfn8cFN3fpDOaLaXntVMwt7URfTdOmzqjYsi40erLuRqpJ4D00ftojur6v',
        },
        razorpay: {
          logo: '/public/assets/imgs/razorpay.svg',
          name: 'razorpay',
          key_id: 'as',
          enabled: false,
          test_mode: false,
          secret_key: 'da',
          description: '',
          test_key_id: '',
          display_name: 'Razorpay',
          test_secret_key: '',
        },
      },
      use_area_list: true,
      is_maintenance: false,
      manual_payments: true,
      payment_inst_title: 'Pay Later',
      term_condition_text: 'Bhgghhhbsbsbbsbnzja bhbb',
      condition_optin_enabled: true,
      invoice_footer_thankyou_msg: '',
    },
    text: "Hi, I'd like to place an order 👇\n\n✅🏃🏽\n Delivery *Order No: 233312*\nfrom ccake.quickzu.com\n--\n▪ 1 ⨯ Shrewsbury Cookies  🟩      INR 10\n▪ 1 ⨯ Choco Chips Cookies  🟩      INR 9\n▪ 1 ⨯ Cokin  🟩      INR 10\n\n Notes: spicy food\n\n--\nItems Total: INR 29.00\n    \nCoupon Discount: INR 0.00\n    \nItem Discount: INR 0.00\n    \nTaxes: INR 2.90\n    \nDelivery: INR 0.00\n    \n*Total: INR 31.90*\n    \n\nCustomer Details🏃🏽\n\nName: Mohit\nContact: 9039101337\n    \nPlease deliver it to my address okay mumbai\n    \n\n---‐---------------------------------------\n\nClassic Cakes will confirm your order upon receiving the message. Here below are the payment options available 👇🏼.\n\nPayment Options 💳\n \nPay Offline via UPI/CASH etc\n\nPayment Method 💳\n PAYLATER",
    overiew: {
      TAXES: 'INR 2.90',
      TOTAL: 'INR 31.90',
      DELIVERY: 'INR 0.00',
      PRODUCTS:
        '▪ 1 ⨯ Shrewsbury Cookies  🟩      INR 10\n▪ 1 ⨯ Choco Chips Cookies  🟩      INR 9\n▪ 1 ⨯ Cokin  🟩      INR 10\n',
      SUB_TOTAL: 'INR 29.00',
      ORDER_TYPE: 'Delivery',
      STORE_LINK: 'ccake.quickzu.com',
      STORE_NAME: 'Classic Cakes',
      PICKUP_TIME: '',
      INVOICE_LINK:
        'https://ccake.quickzu.com/paylater/success?orderId=65cc96cfcf7028f638e20b0c',
      ORDER_NUMBER: 233312,
      TABLE_NUMBER: '',
      CUSTOMER_NAME: 'Mohit',
      CUSTOMER_PHONE: '9039101337',
      PAYMENT_METHOD: 'PAYLATER',
      APPOINTMENT_TIME: '',
      CUSTOMER_ADDRESS: 'okay mumbai',
      ORDER_INSTRUCTION: 'spicy food',
      SUBTOTAL_DISCOUNT: 'INR 0.00',
      ITEM_LEVEL_DISCOUNT: 'INR 0.00',
      PAYMENT_INSTRUCTION: '\nPay Offline via UPI/CASH etc',
    },
    hyperlink:
      "https://wa.me/916260494878?text=Hi%2C%20I'd%20like%20to%20place%20an%20order%20%F0%9F%91%87%0A%0A%E2%9C%85%F0%9F%8F%83%F0%9F%8F%BD%0A%20Delivery%20*Order%20No%3A%20233312*%0Afrom%20ccake.quickzu.com%0A--%0A%E2%96%AA%201%20%E2%A8%AF%20Shrewsbury%20Cookies%20%20%F0%9F%9F%A9%20%20%20%20%20%20INR%2010%0A%E2%96%AA%201%20%E2%A8%AF%20Choco%20Chips%20Cookies%20%20%F0%9F%9F%A9%20%20%20%20%20%20INR%209%0A%E2%96%AA%201%20%E2%A8%AF%20Cokin%20%20%F0%9F%9F%A9%20%20%20%20%20%20INR%2010%0A%0A%20Notes%3A%20spicy%20food%0A%0A--%0AItems%20Total%3A%20INR%2029.00%0A%20%20%20%20%0ACoupon%20Discount%3A%20INR%200.00%0A%20%20%20%20%0AItem%20Discount%3A%20INR%200.00%0A%20%20%20%20%0ATaxes%3A%20INR%202.90%0A%20%20%20%20%0ADelivery%3A%20INR%200.00%0A%20%20%20%20%0A*Total%3A%20INR%2031.90*%0A%20%20%20%20%0A%0ACustomer%20Details%F0%9F%8F%83%F0%9F%8F%BD%0A%0AName%3A%20Mohit%0AContact%3A%209039101337%0A%20%20%20%20%0APlease%20deliver%20it%20to%20my%20address%20okay%20mumbai%0A%20%20%20%20%0A%0A---%E2%80%90---------------------------------------%0A%0AClassic%20Cakes%20will%20confirm%20your%20order%20upon%20receiving%20the%20message.%20Here%20below%20are%20the%20payment%20options%20available%20%F0%9F%91%87%F0%9F%8F%BC.%0A%0APayment%20Options%20%F0%9F%92%B3%0A%20%0APay%20Offline%20via%20UPI%2FCASH%20etc%0A%0APayment%20Method%20%F0%9F%92%B3%0A%20PAYLATER",
    total_amount: '31.90',
  },
  resource: 'order',
  operation: 'create',
};

export const orderCreatedTrigger = createTrigger({
  auth: quickzuAuth,
  name: 'quickzu_order_created_trigger',
  displayName: 'Order Created',
  description: 'Triggers when a new order is created in store.',
  type: TriggerStrategy.WEBHOOK,
  sampleData: sampleData,
  props: {
    md: Property.MarkDown({
      value: markdown,
    }),
  },
  async onEnable(context) {
    // Empty
  },
  async onDisable(context) {
    // Empty
  },
  async run(context) {
    return [context.payload.body];
  },
  async test(context) {
    return [context.payload.body];
  },
});
