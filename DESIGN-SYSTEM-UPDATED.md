# سيرة - نظام التصميم النهائي
## Design System Documentation

---

## ⚠️ تنبيه مهم جداً - CRITICAL NOTICE

**هذا المستند يحتوي على تحديثات للألوان والتصميم فقط**

**DO NOT DELETE ANY EXISTING CODE**

- لا تحذف أي أكواد موجودة
- لا تحذف أي مكونات (components)
- لا تحذف أي صفحات (pages)
- لا تحذف أي وظائف (functions)

**فقط قم بـ:**
1. تحديث متغيرات الألوان في `index.css`
2. إضافة مكون اللوقو الجديد
3. إضافة زر تبديل الوضع
4. تحديث الألوان في المكونات الموجودة

**احتفظ بكل شيء آخر كما هو!**

---

## 1. لوحة الألوان النهائية (Color Palette)

### الألوان الأساسية (Primary Colors)

```css
/* Light Mode */
--background: #E8DED1;          /* خلفية بيج فاتحة */
--foreground: #3E2A1F;          /* نص بني غامق */
--primary: #8B5A3C;             /* بني متوسط - أزرار رئيسية */
--primary-hover: #6B4529;       /* بني غامق عند التمرير */
--accent: #C67B55;              /* برتقالي دافئ - تمييز */
--accent-green: #5C7A5F;        /* أخضر زيتوني - دائرة البروفايل */

/* Dark Mode */
--background-dark: #2A1F1A;     /* خلفية بنية داكنة جداً */
--foreground-dark: #E8DED1;     /* نص بيج فاتح */
--primary-dark: #8B5A3C;        /* نفس البني للأزرار */
--accent-dark: #C67B55;         /* نفس البرتقالي */

/* Borders & UI Elements */
--border-light: #D4CABD;        /* حدود فاتحة */
--border-dark: #3D3028;         /* حدود داكنة */
--input-bg-light: #F5F1E8;      /* خلفية حقول الإدخال فاتحة */
--input-bg-dark: #3D3028;       /* خلفية حقول الإدخال داكنة */

/* Secondary Text */
--text-secondary-light: #6B5A4D;
--text-secondary-dark: #B8AFA4;
```

### جدول الألوان بالـ Hex

| الاسم | Light Mode | Dark Mode | الاستخدام |
|-------|-----------|-----------|----------|
| Background | #E8DED1 | #2A1F1A | الخلفية الرئيسية |
| Foreground | #3E2A1F | #E8DED1 | النصوص الأساسية |
| Primary | #8B5A3C | #8B5A3C | الأزرار الرئيسية |
| Accent | #C67B55 | #C67B55 | التمييز والتسليط |
| Border | #D4CABD | #3D3028 | الحدود والخطوط |
| Input BG | #F5F1E8 | #3D3028 | خلفية حقول الإدخال |

---

## 2. تحديث index.css - UPDATE ONLY, DON'T DELETE

### الخطوة 1: ابحث عن `:root` في index.css

ستجد قسم يشبه هذا:

```css
:root {
  --background: ... /* اللون القديم */
  --foreground: ... /* اللون القديم */
  /* ... الخ */
}
```

### الخطوة 2: استبدل فقط قيم الألوان

**استبدل القيم القديمة بهذه القيم الجديدة:**

```css
:root {
  /* === ألوان جديدة - استبدل فقط === */
  --background: #E8DED1;
  --foreground: #3E2A1F;
  --primary: #8B5A3C;
  --primary-hover: #6B4529;
  --accent: #C67B55;
  --accent-green: #5C7A5F;
  --border: #D4CABD;
  --input-bg: #F5F1E8;
  --text-secondary: #6B5A4D;
  
  /* === باقي المتغيرات - لا تحذفها === */
  /* احتفظ بكل المتغيرات الأخرى الموجودة */
}
```

### الخطوة 3: إضافة أو تحديث `.dark`

ابحث عن `.dark` في index.css. إذا وجدته، استبدل الألوان. إذا لم تجده، أضف هذا القسم:

```css
.dark {
  --background: #2A1F1A;
  --foreground: #E8DED1;
  --border: #3D3028;
  --input-bg: #3D3028;
  --text-secondary: #B8AFA4;
}
```

### ⚠️ مهم جداً

**لا تحذف:**
- أي متغيرات أخرى موجودة في `:root`
- أي قواعد CSS أخرى
- أي تعريفات للقوالب (templates)
- أي أنماط للمكونات الموجودة

**فقط استبدل قيم الألوان المذكورة أعلاه**

---

## 3. إضافة أنماط اللوقو - ADD TO index.css

### أضف هذا القسم في نهاية index.css

**لا تحذف أي شيء، فقط أضف هذا في النهاية:**

```css
/* ========================================
   Logo Styles - أنماط اللوقو الجديد
   ======================================== */

.logo-integrated {
    display: inline-flex;
    align-items: center;
    gap: 12px;
}

.logo-icon {
    width: 40px;
    height: 54px;
    background: #8B5A3C;
    border-radius: 5px;
    position: relative;
    flex-shrink: 0;
}

.logo-icon::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 10px 0;
    border-color: transparent #6B4529 transparent transparent;
}

.logo-icon::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 7px;
    right: 7px;
    bottom: 8px;
    background: var(--background);
    border-radius: 2px;
}

.profile-circle {
    position: absolute;
    top: 13px;
    left: 50%;
    transform: translateX(-50%);
    width: 11px;
    height: 11px;
    z-index: 1;
}

.profile-circle::before {
    content: '';
    position: absolute;
    width: 11px;
    height: 11px;
    background: #5C7A5F;
    border-radius: 50%;
}

.profile-circle::after {
    content: '';
    position: absolute;
    width: 5.5px;
    height: 11px;
    right: 0;
    background: #C67B55;
    border-radius: 0 5.5px 5.5px 0;
}

.logo-lines {
    position: absolute;
    top: 27px;
    left: 10px;
    right: 10px;
    z-index: 1;
}

.logo-lines .line-1,
.logo-lines .line-2,
.logo-lines .line-3 {
    position: absolute;
    left: 0;
    height: 1.5px;
    background: #8B5A3C;
    border-radius: 1px;
}

.logo-lines .line-1 {
    top: 0;
    width: 100%;
}

.logo-lines .line-2 {
    top: 6px;
    width: 85%;
}

.logo-lines .line-3 {
    top: 12px;
    width: 70%;
}

.logo-text {
    font-family: 'Cairo', sans-serif;
    font-size: 32px;
    font-weight: 900;
    color: var(--foreground);
    line-height: 1;
}

/* Logo - Small Size */
.logo-small .logo-icon {
    width: 32px;
    height: 44px;
}

.logo-small .logo-icon::before {
    border-width: 0 8px 8px 0;
}

.logo-small .logo-icon::after {
    top: 8px;
    left: 5px;
    right: 5px;
    bottom: 6px;
}

.logo-small .profile-circle {
    top: 11px;
    width: 9px;
    height: 9px;
}

.logo-small .profile-circle::before {
    width: 9px;
    height: 9px;
}

.logo-small .profile-circle::after {
    width: 4.5px;
    height: 9px;
    border-radius: 0 4.5px 4.5px 0;
}

.logo-small .logo-lines {
    top: 23px;
    left: 8px;
    right: 8px;
}

.logo-small .logo-lines .line-1,
.logo-small .logo-lines .line-2,
.logo-small .logo-lines .line-3 {
    height: 1.5px;
}

.logo-small .logo-lines .line-2 {
    top: 5px;
}

.logo-small .logo-lines .line-3 {
    top: 10px;
}

.logo-small .logo-integrated {
    gap: 8px;
}

.logo-small .logo-text {
    font-size: 24px;
}
```

---

## 4. إضافة زر تبديل الوضع - ADD TO index.css

### أضف هذا أيضاً في نهاية index.css

```css
/* ========================================
   Theme Toggle Button - زر تبديل الوضع
   ======================================== */

.theme-toggle {
    position: fixed;
    bottom: 32px;
    left: 32px;
    width: 56px;
    height: 56px;
    background: var(--primary);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    z-index: 1000;
}

.theme-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.theme-toggle .icon-light {
    display: block;
}

.theme-toggle .icon-dark {
    display: none;
}

.dark .theme-toggle .icon-light {
    display: none;
}

.dark .theme-toggle .icon-dark {
    display: block;
}
```

---

## 5. إنشاء مكونات جديدة - CREATE NEW FILES

### أ) Logo.tsx - ملف جديد

**أنشئ ملف جديد:** `src/components/Logo.tsx`

```typescript
interface LogoProps {
  size?: 'small' | 'large';
}

export function Logo({ size = 'large' }: LogoProps) {
  return (
    <div className={`logo-integrated ${size === 'small' ? 'logo-small' : ''}`}>
      <div className="logo-icon">
        <div className="profile-circle"></div>
        <div className="logo-lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </div>
      <span className="logo-text">سيرة</span>
    </div>
  );
}
```

### ب) ThemeContext.tsx - ملف جديد

**أنشئ ملف جديد:** `src/contexts/ThemeContext.tsx`

```typescript
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
```

### ج) ThemeToggle.tsx - ملف جديد

**أنشئ ملف جديد:** `src/components/ThemeToggle.tsx`

```typescript
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { toggleTheme } = useTheme();
  
  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="تبديل الوضع"
    >
      <span className="icon-light">☀️</span>
      <span className="icon-dark">🌙</span>
    </button>
  );
}
```

---

## 6. تحديث المكونات الموجودة - UPDATE EXISTING FILES

### تحديث WelcomeScreen.tsx

**ابحث عن المكون الموجود وقم بالتحديثات التالية:**

#### 1. استبدل اللوقو القديم باللوقو الجديد

**قبل:**
```tsx
<div className="logo-old">
  {/* اللوقو القديم */}
</div>
```

**بعد:**
```tsx
import { Logo } from '@/components/Logo';

<Logo size="small" />
```

#### 2. أضف زر تبديل الوضع

**في نهاية المكون، قبل إغلاق `</div>` الأخير:**

```tsx
import { ThemeToggle } from '@/components/ThemeToggle';

// ... باقي الكود ...

return (
  <div>
    {/* المحتوى الموجود - لا تحذف أي شيء */}
    
    {/* أضف هذا فقط */}
    <ThemeToggle />
  </div>
);
```

### ⚠️ مهم: لا تحذف أي شيء من WelcomeScreen.tsx

- احتفظ بكل الـ JSX الموجود
- احتفظ بكل الـ logic الموجود
- احتفظ بكل الـ props والـ state
- فقط استبدل اللوقو وأضف زر التبديل

---

## 7. تحديث App.tsx أو main.tsx

### أضف ThemeProvider

**ابحث عن الكود الموجود:**

```tsx
function App() {
  return (
    <div>
      {/* المحتوى الحالي */}
    </div>
  );
}
```

**لف المحتوى بـ ThemeProvider:**

```tsx
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div>
        {/* المحتوى الحالي - لا تغير أي شيء هنا */}
      </div>
    </ThemeProvider>
  );
}
```

---

## 8. تحديث index.html

### أضف خطوط Cairo إذا لم تكن موجودة

**ابحث عن `<head>` في index.html وتأكد من وجود:**

```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Cairo:wght@700;800;900&display=swap" rel="stylesheet">
```

**إذا لم تكن موجودة، أضفها داخل `<head>`**

---

## 9. قائمة المهام (Implementation Checklist)

### ✅ الخطوات بالترتيب

- [ ] **الخطوة 1:** تحديث ألوان `:root` في `index.css`
- [ ] **الخطوة 2:** إضافة/تحديث `.dark` في `index.css`
- [ ] **الخطوة 3:** إضافة أنماط اللوقو في نهاية `index.css`
- [ ] **الخطوة 4:** إضافة أنماط زر التبديل في نهاية `index.css`
- [ ] **الخطوة 5:** إنشاء `Logo.tsx` جديد
- [ ] **الخطوة 6:** إنشاء `ThemeContext.tsx` جديد
- [ ] **الخطوة 7:** إنشاء `ThemeToggle.tsx` جديد
- [ ] **الخطوة 8:** إضافة خطوط Cairo في `index.html`
- [ ] **الخطوة 9:** لف App بـ `ThemeProvider`
- [ ] **الخطوة 10:** استبدال اللوقو القديم في `WelcomeScreen.tsx`
- [ ] **الخطوة 11:** إضافة `<ThemeToggle />` في `WelcomeScreen.tsx`
- [ ] **الخطوة 12:** اختبار الوضع الفاتح
- [ ] **الخطوة 13:** اختبار الوضع الداكن
- [ ] **الخطوة 14:** اختبار حفظ التفضيلات

---

## 10. ملاحظات نهائية مهمة

### ⚠️ ما يجب تجنبه

**لا تفعل هذا:**
- ❌ حذف أي مكونات موجودة
- ❌ حذف أي صفحات موجودة
- ❌ حذف أي CSS موجود (إلا قيم الألوان فقط)
- ❌ تغيير البنية العامة للمشروع
- ❌ حذف أي imports موجودة
- ❌ حذف أي routes موجودة

### ✅ ما يجب فعله

**افعل هذا فقط:**
- ✅ استبدال قيم الألوان في `:root`
- ✅ إضافة CSS جديد في النهاية
- ✅ إنشاء ملفات مكونات جديدة
- ✅ إضافة imports جديدة
- ✅ استبدال مكون اللوقو القديم فقط

---

## 11. الاختبار

### بعد كل تغيير، تأكد من:

1. ✅ الموقع يعمل بدون أخطاء في console
2. ✅ الألوان تظهر بشكل صحيح
3. ✅ اللوقو الجديد يظهر
4. ✅ زر التبديل يعمل
5. ✅ الوضع الداكن يعمل
6. ✅ التفضيلات تُحفظ في localStorage
7. ✅ كل الصفحات الموجودة ما زالت تعمل

---

## 12. في حال حدوث مشاكل

### إذا ظهرت أخطاء:

1. تأكد أنك لم تحذف أي كود موجود
2. تأكد من إضافة imports الجديدة
3. تأكد من إضافة الخطوط في index.html
4. راجع console للأخطاء
5. تأكد من مسارات الملفات صحيحة

### إذا لم تظهر الألوان:

1. تأكد من حفظ index.css
2. تأكد من تحديث الصفحة (Ctrl+Shift+R)
3. تأكد من أن متغيرات CSS تستخدم `var(--variable-name)`

---

## الخلاصة

**هذا المستند يحتوي على:**
- ✅ الألوان الجديدة فقط
- ✅ مكونات جديدة للإضافة
- ✅ تحديثات محددة للملفات الموجودة
- ✅ لا يطلب حذف أي شيء موجود

**اتبع الخطوات بالترتيب ولا تحذف أي كود موجود**

**آخر تحديث:** يناير 2026
