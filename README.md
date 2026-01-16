# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

-------------------------------------------------------------------------------------------------------
<!-- About My Project -->

# Sculptique Landing Page Clone

## Mô tả Dự án

Đây là dự án clone trang landing page sản phẩm Sculptique Lymphatic Drainage Capsules từ trang gốc [https://trysculptique.com/products/lymph-cc-select](https://trysculptique.com/products/lymph-cc-select).

Dự án được xây dựng bằng **React** + **Vite** + **TailwindCSS**, mô phỏng lại toàn bộ layout, design và chức năng của trang landing page bán sản phẩm thực phẩm chức năng hỗ trợ dẫn lưu bạch huyết.

### Về Sản phẩm Gốc

Sculptique Lymphatic Drainage Capsules là sản phẩm thực phẩm chức năng dành cho phụ nữ, hỗ trợ:
- Giảm tình trạng phù nề, chướng bụng
- Cải thiện lưu thông bạch huyết
- Tăng cường năng lượng và độ tỉnh táo
- Hỗ trợ giảm cellulite và cải thiện vẻ ngoài làn da

## Cấu trúc Dự án

### Kiến trúc Tổng quan

```
App
├─ Header
├─ Body
│  ├─ HeroSection (ProductHero)
│  │  ├─ ProductGallery
│  │  └─ ProductSummary
│  ├─ AsSeenInMarquee (SocialProof)
│  ├─ TrustBadges
│  ├─ Connection (Benefits)
│  ├─ Comparison
│  ├─ WhyNotThis
│  ├─ Ingredient
│  ├─ FeedbackHeader + FeedbackList (Feedbacks)
│  ├─ Features
│  ├─ DoctorEndorsement
│  ├─ UGCSection
│  ├─ FAQSection (FAQ)
│  └─ FinalCTASection (FinalCTA)
└─ Footer
```

### Chi tiết các Component

#### 1. **Header**
- Navigation bar với logo và menu
- Sticky header khi scroll

#### 2. **HeroSection (ProductHero)**
- **ProductGallery**: Hiển thị hình ảnh sản phẩm với carousel
- **ProductSummary**: Thông tin sản phẩm, giá cả, call-to-action buttons

#### 3. **AsSeenInMarquee (SocialProof)**
- Scrolling marquee hiển thị các logo báo chí/tạp chí đã đưa tin
- Xây dựng độ tin cậy thương hiệu

#### 4. **TrustBadges**
- Các badge tin cậy như: Free Shipping, Money Back Guarantee, Natural Ingredients
- Icon + text layout

#### 5. **Connection (Benefits)**
- Giải thích vấn đề khách hàng đang gặp phải
- Mô tả triệu chứng: chướng bụng, phù nề, mệt mỏi
- Kết nối các vấn đề với nhau

#### 6. **Comparison**
- So sánh sản phẩm với các giải pháp khác trên thị trường
- Bảng so sánh features và benefits

#### 7. **WhyNotThis**
- Giải thích tại sao các giải pháp khác không hiệu quả
- Debunk các myth và misunderstanding

#### 8. **Ingredient**
- Danh sách 8 thành phần chính
- Mô tả tác dụng của từng thành phần
- Scientific backing

#### 9. **Feedbacks**
- **FeedbackHeader**: Tiêu đề section testimonials
- **FeedbackList**: Grid hiển thị các review của khách hàng
- Star ratings và verified purchase badges

#### 10. **Features**
- Highlight các tính năng nổi bật của sản phẩm
- Benefits được structure dạng icon + title + description

#### 11. **DoctorEndorsement**
- Lời chứng thực từ bác sĩ chuyên khoa
- Authority và credibility building

#### 12. **UGCSection**
- User Generated Content
- Video testimonials từ khách hàng thực

#### 13. **FAQSection**
- Frequently Asked Questions
- Accordion/dropdown interface
- Address common objections và concerns

#### 14. **FinalCTASection**
- Call-to-action cuối cùng
- Pricing options với bundles
- Urgency và scarcity elements

#### 15. **Footer**
- Company information
- Links và policies
- Contact information

### Các Component Phụ trợ

- **ScrollArrow**: Component mũi tên scroll xuống
- **NewYearBadge**: Badge khuyến mãi đặc biệt
- **RatingStars**: Component hiển thị đánh giá sao
- **FAQItem**: Item đơn lẻ trong FAQ section

## Technology Stack

### Frontend Framework
- **React 19.2.0**: JavaScript library cho UI components
- **React DOM 19.2.3**: DOM rendering cho React

### Build Tool
- **Vite 7.2.4**: Fast build tool và dev server
- **@vitejs/plugin-react 5.1.1**: Vite plugin cho React

### Styling
- **TailwindCSS 3.4.17**: Utility-first CSS framework
- **PostCSS 8.5.6**: CSS post-processor
- **Autoprefixer 10.4.23**: CSS vendor prefixes

### Code Quality
- **ESLint 9.39.1**: JavaScript/React linting
- **eslint-plugin-react-hooks**: React Hooks linting rules
- **eslint-plugin-react-refresh**: React Fast Refresh linting

### Development
- **@types/react & @types/react-dom**: TypeScript definitions
- **globals**: Global variables definitions

## Hướng dẫn Cài đặt và Chạy Dự án

### Yêu cầu Hệ thống

- **Node.js**: Version 18.0.0 hoặc cao hơn
- **npm**: Version 8.0.0 hoặc cao hơn
- **Git**: Để clone repository

### Bước 1: Clone Repository

```bash
# Clone project từ repository
git clone <repository-url>
cd alpha-landing-page
```

**Hoặc** nếu bạn tải file ZIP:

```bash
# Giải nén file và di chuyển vào thư mục
cd alpha-landing-page
```

### Bước 2: Cài đặt Dependencies

```bash
# Cài đặt tất cả packages cần thiết
npm install
```

Lệnh này sẽ cài đặt tất cả dependencies được liệt kê trong `package.json`:
- React và React DOM
- Vite và các plugins
- TailwindCSS và PostCSS
- ESLint và các rules

### Bước 3: Chạy Development Server

```bash
# Khởi động development server
npm run dev
```

Lệnh này sẽ:
- Khởi động Vite dev server
- Mở ứng dụng tại `http://localhost:5173`
- Enable hot reload cho development
- Hiển thị link local và network để truy cập

### Bước 4: Build cho Production

```bash
# Build ứng dụng cho production
npm run build
```

Lệnh này sẽ:
- Optimize và minify code
- Tạo thư mục `dist/` với static files
- Sẵn sàng để deploy lên hosting

### Bước 5: Preview Production Build

```bash
# Preview production build locally
npm run preview
```

Lệnh này khởi động local server để preview production build.

## Scripts Available

| Script | Mô tả |
|--------|--------|
| `npm run dev` | Khởi động development server với hot reload |
| `npm run build` | Build ứng dụng cho production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Chạy ESLint để check code quality |

## Cấu trúc Thư mục

```
alpha-landing-page/
├── public/                     # Static assets
│   └── images/                # Hình ảnh static
├── src/                       # Source code
│   ├── components/            # React components
│   │   ├── benefits/         # Connection component
│   │   ├── common/           # Shared components (ScrollArrow, NewYearBadge, RatingStars)
│   │   ├── comparison/       # Comparison component
│   │   ├── doctorendorsement/# Doctor testimonial component
│   │   ├── faq/              # FAQ components (FAQSection, FAQItem)
│   │   ├── features/         # Features showcase component
│   │   ├── feedbacks/        # Customer review components
│   │   ├── finalcta/         # Final call-to-action component
│   │   ├── hero/             # Hero section components
│   │   ├── ingredient/       # Ingredients showcase component
│   │   ├── layout/           # Layout components
│   │   ├── mainlayout/       # Main layout structure (Header, Body, Footer)
│   │   ├── socialproof/      # Social proof marquee
│   │   ├── trustbadges/      # Trust badges component
│   │   ├── ugc/              # User generated content
│   │   └── whynotthis/       # Why competitors don't work
│   ├── assets/               # Project assets
│   ├── App.jsx               # Main App component
│   ├── App.css               # Global styles
│   ├── main.jsx              # React entry point
│   └── index.css             # CSS entry point với TailwindCSS imports
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Dependencies và scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # TailwindCSS configuration
└── vite.config.js            # Vite configuration
```

## Customization Guide

### Thay đổi Nội dung

1. **Text Content**: Edit các file component trong `src/components/`
2. **Images**: Thay thế files trong `public/images/`
3. **Colors**: Modify `tailwind.config.js` để thay đổi color palette
4. **Fonts**: Add custom fonts trong `index.css` và `tailwind.config.js`

### Thêm Components Mới

1. Tạo folder mới trong `src/components/`
2. Export component từ folder
3. Import và sử dụng trong `Body.jsx`

### Styling Guidelines

- Sử dụng TailwindCSS utilities
- Mobile-first responsive design
- Consistent spacing với Tailwind spacing scale
- Color scheme theo branding của Sculptique

## Performance Considerations

### Optimization đã Implement

1. **React 19**: Latest version với performance improvements
2. **Vite**: Fast build tool và efficient bundling
3. **TailwindCSS**: Purge unused styles trong production
4. **Component Structure**: Modular components để code splitting

### Best Practices

1. **Image Optimization**: Sử dụng appropriate image formats và sizes
2. **Lazy Loading**: Implement cho images và components không critical
3. **Bundle Analysis**: Sử dụng `npm run build` để check bundle size
4. **Caching**: Configure proper caching headers khi deploy

## Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions  
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile**: iOS Safari, Android Chrome

## Contributing Guidelines

1. Follow existing code structure và naming conventions
2. Sử dụng TailwindCSS cho styling
3. Ensure responsive design across all devices
4. Test trên multiple browsers
5. Run `npm run lint` trước khi commit

## Deployment Options

### Static Hosting
- **Vercel**: Optimal cho Vite projects
- **Netlify**: Easy deployment với GitHub integration
- **GitHub Pages**: Free hosting cho static sites

### CDN Deployment
- **AWS CloudFront**: Enterprise-level CDN
- **Cloudflare Pages**: Fast global delivery

### Build Command cho Hosting Platforms
```bash
npm run build
```

### Serve Directory
```
dist/
```

## Support và Liên hệ

Nếu có vấn đề hoặc câu hỏi về dự án:

1. Check existing documentation
2. Review component structure trong code
3. Test các scripts npm commands
4. Verify Node.js và npm versions

---

**Note**: Đây là dự án clone dành cho mục đích học tập và demonstration. Không sử dụng cho mục đích thương mại mà chưa có sự đồng ý của chủ sở hữu trang web gốc.
