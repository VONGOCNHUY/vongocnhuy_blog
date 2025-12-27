
import React, { useState, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { BLOG_POSTS, PROFILE_DATA, UI_STRINGS, CERTIFICATIONS } from './constants';
import { Locale, Category, SkillGroup } from './types';

// Language Context
interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: keyof typeof UI_STRINGS) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    return (localStorage.getItem('lang') as Locale) || 'vi';
  });

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('lang', l);
  };

  const t = (key: keyof typeof UI_STRINGS) => UI_STRINGS[key][locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

const getCategoryStyles = (category: Category) => {
  switch(category) {
    case 'Java': return 'bg-orange-50/50 text-orange-400 border-orange-100/50';
    case 'JavaScript': return 'bg-blue-50/50 text-blue-400 border-blue-100/50';
    default: return 'bg-pink-50/50 text-pink-300 border-pink-100/50';
  }
};

const Navbar: React.FC = () => {
  const location = useLocation();
  const { locale, setLocale, t } = useLanguage();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-3xl border-b border-pink-50/50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter text-pink-300 hover:text-pink-400 transition-colors">
          NhuY<span className="text-pink-100">.</span>
        </Link>
        <div className="flex items-center gap-4 md:gap-8">
          <Link to="/" className={`text-sm font-bold transition-all ${isActive('/') ? 'text-pink-400 scale-105' : 'text-gray-300 hover:text-pink-300'}`}>
            {t('navHome')}
          </Link>
          <Link to="/skills" className={`text-sm font-bold transition-all ${isActive('/skills') ? 'text-pink-400 scale-105' : 'text-gray-300 hover:text-pink-300'}`}>
            {t('navSkills')}
          </Link>
          <Link to="/blog" className={`text-sm font-bold transition-all ${isActive('/blog') ? 'text-pink-400 scale-105' : 'text-gray-300 hover:text-pink-300'}`}>
            {t('navBlog')}
          </Link>
          <Link to="/certs" className={`text-sm font-bold transition-all ${isActive('/certs') ? 'text-pink-400 scale-105' : 'text-gray-300 hover:text-pink-300'}`}>
            {t('navCert')}
          </Link>
          <Link to="/contact" className={`text-sm font-bold transition-all ${isActive('/contact') ? 'text-pink-400 scale-105' : 'text-gray-300 hover:text-pink-300'}`}>
            {t('navContact')}
          </Link>
          <button 
            onClick={() => setLocale(locale === 'vi' ? 'en' : 'vi')}
            className="px-4 py-1.5 bg-pink-300 text-white rounded-full text-[10px] font-black tracking-widest transition-transform hover:scale-105 shadow-sm hover:bg-pink-400"
          >
            {locale.toUpperCase()}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Home: React.FC = () => {
  const { locale, t } = useLanguage();
  const techSkills = PROFILE_DATA.skillGroups[1];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 animate-in">
      {/* 1. Home header */}
      <header className="flex flex-col md:flex-row items-center gap-16 mb-32">
        <div className="relative">
          <div className="absolute -inset-6 bg-pink-100/20 rounded-full blur-3xl"></div>
          <img 
            src={PROFILE_DATA.avatar} 
            alt={PROFILE_DATA.name} 
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-[4rem] object-cover shadow-2xl ring-4 ring-white"
          />
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-none">
            {PROFILE_DATA.name}
          </h1>
          <p className="text-xl text-pink-300 font-extrabold mb-8 uppercase tracking-widest text-sm">{PROFILE_DATA.role[locale]}</p>
          <div className="space-y-4 mb-8">
            {PROFILE_DATA.bio[locale].split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-400 leading-relaxed text-lg font-medium max-w-2xl">{para}</p>
            ))}
          </div>
          <p className="p-6 bg-pink-50/30 rounded-3xl border-l-4 border-pink-300 text-pink-400 font-bold italic shadow-sm">
            "{PROFILE_DATA.goal[locale]}"
          </p>
        </div>
      </header>

      {/* 2. Skills section */}
      <section className="mb-32">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-black text-gray-900 flex items-center gap-4">
            <div className="w-12 h-1.5 bg-pink-200 rounded-full"></div>
            {t('skillsHeader')}
          </h2>
          <Link to="/skills" className="text-sm font-black text-pink-300 border-b-2 border-pink-50 pb-1 hover:border-pink-300 transition-all">
            {t('viewAll')}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techSkills.items.slice(0, 4).map(skill => (
            <div key={skill} className="p-6 liquid-card rounded-[2.5rem] flex items-center gap-4 hover:bg-white/80 hover:scale-[1.02] transition-all group">
              <div className="w-2.5 h-2.5 rounded-full bg-pink-200 group-hover:bg-pink-300 shadow-[0_0_12px_rgba(244,114,182,0.2)]"></div>
              <span className="text-gray-600 font-bold tracking-tight">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Blog section */}
      <section>
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-black text-gray-900 flex items-center gap-4">
            <div className="w-12 h-1.5 bg-pink-200 rounded-full"></div>
            {t('latestPosts')}
          </h2>
          <Link to="/blog" className="text-sm font-black text-pink-300 border-b-2 border-pink-50 pb-1 hover:border-pink-300 transition-all">
            {t('viewAll')}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3).map(post => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group liquid-card rounded-3xl overflow-hidden flex flex-col hover:-translate-y-2 hover:bg-white/60 transition-all duration-500">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0" alt={post.title?.[locale] || post.title?.vi || post.title?.en || ''} />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-black text-gray-900 mb-2 leading-tight group-hover:text-pink-400 transition-colors line-clamp-2">
                  {post.title?.[locale] || post.title?.vi || post.title?.en || ''}
                </h3>
                <p className="text-gray-400 font-medium text-sm mb-4 line-clamp-2 flex-1">{post.excerpt?.[locale] || post.excerpt?.vi || post.excerpt?.en || ''}</p>
                <span className="text-[11px] font-bold text-pink-300 uppercase tracking-widest mt-auto">{post.readTime?.[locale] || post.readTime?.vi || post.readTime?.en || ''}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Certs section */}
      <section>
        <div className="flex justify-between items-end mb-12 mt-20">
          <h2 className="text-3xl font-black text-gray-900 flex items-center gap-4">
            <div className="w-12 h-1.5 bg-pink-200 rounded-full"></div>
            {t('certTitle')}
          </h2>
          <Link to="/certs" className="text-sm font-black text-pink-300 border-b-2 border-pink-50 pb-1 hover:border-pink-300 transition-all">
            {t('viewAll')}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.slice(0, 3).map(cert => {
            const [showImg, setShowImg] = React.useState(false);
            return (
              <React.Fragment key={cert.id}>
                <div className="liquid-card rounded-3xl overflow-hidden flex flex-col hover:-translate-y-2 hover:bg-white/60 transition-all duration-500">
                  <div className="aspect-[4/3] w-full overflow-hidden cursor-zoom-in" style={{minHeight: 0}} onClick={() => setShowImg(true)}>
                    <img src={cert.image} alt={cert.title?.[locale] || cert.title?.vi || cert.title?.en || ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-black text-gray-900 mb-2 leading-tight group-hover:text-pink-400 transition-colors line-clamp-2">
                      {cert.title?.[locale] || cert.title?.vi || cert.title?.en || ''}
                    </h3>
                    <p className="text-gray-400 font-medium text-sm mb-4 line-clamp-2 flex-1">{cert.reflection?.[locale] || cert.reflection?.vi || cert.reflection?.en || ''}</p>
                    <span className="text-[11px] font-bold text-pink-300 uppercase tracking-widest mt-auto">{cert.issuer} • {cert.date}</span>
                  </div>
                </div>
                {showImg && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setShowImg(false)}>
                    <img src={cert.image} alt={cert.title?.[locale] || cert.title?.vi || cert.title?.en || ''} className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl border-8 border-white" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* 5. Contact section */}
      <section className="mt-20">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-black text-gray-900 flex items-center gap-4">
            <div className="w-12 h-1.5 bg-pink-200 rounded-full"></div>
            {t('navContact')}
          </h2>
          <Link to="/contact" className="text-sm font-black text-pink-300 border-b-2 border-pink-50 pb-1 hover:border-pink-300 transition-all">
            {t('viewAll')}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Social cards giống trang Contact */}
          <a href={PROFILE_DATA.links.github} target="_blank" rel="noopener noreferrer" className="liquid-card rounded-3xl flex flex-col items-center p-8 hover:bg-white/80 transition-all">
            <svg className="w-10 h-10 mb-4 text-pink-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span className="font-bold text-gray-700">GitHub</span>
          </a>
          <a href={PROFILE_DATA.links.facebook} target="_blank" rel="noopener noreferrer" className="liquid-card rounded-3xl flex flex-col items-center p-8 hover:bg-white/80 transition-all">
            <svg className="w-10 h-10 mb-4 text-pink-300" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <span className="font-bold text-gray-700">Facebook</span>
          </a>
          <a href={`mailto:${PROFILE_DATA.links.email}`} className="liquid-card rounded-3xl flex flex-col items-center p-8 hover:bg-white/80 transition-all">
            <svg className="w-10 h-10 mb-4 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <span className="font-bold text-gray-700">Gmail</span>
          </a>
          <a href={`tel:${PROFILE_DATA.links.phone.replace(/\s/g, '')}`} className="liquid-card rounded-3xl flex flex-col items-center p-8 hover:bg-white/80 transition-all">
            <svg className="w-10 h-10 mb-4 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span className="font-bold text-gray-700">{locale === 'vi' ? 'Số điện thoại' : 'Phone'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

const SkillsPage: React.FC = () => {
  const { locale, t } = useLanguage();
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 animate-in">
      <div className="mb-20 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 tracking-tighter">{t('navSkills')}</h1>
        <p className="text-2xl text-gray-300 font-medium max-w-3xl leading-relaxed mx-auto md:mx-0">
          Hành trang kỹ thuật và tư duy sáng tạo của mình.
        </p>
      </div>
      <div className="space-y-20">
        {PROFILE_DATA.skillGroups.map((group, idx) => (
          <section key={idx}>
            <h2 className="text-3xl font-black text-gray-900 mb-10 flex items-center gap-6">
              <span className="text-pink-200">0{idx + 1}</span>
              {group.title[locale]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((item, i) => (
                <div key={i} className="p-8 liquid-card rounded-[3rem] hover:bg-white/80 hover:translate-x-2 transition-all">
                  <p className="text-gray-600 font-bold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  const { locale, t } = useLanguage();
  // Sắp xếp BLOG_POSTS theo date giảm dần (bài mới nhất trên đầu)
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Lấy danh sách category duy nhất
  const categories = Array.from(new Set(BLOG_POSTS.map(post => post.category)));
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  // Lọc theo category trước, sau đó lọc theo searchTerm
  const filteredPosts = (selectedCategory ? sortedPosts.filter(post => post.category === selectedCategory) : sortedPosts)
    .filter(post => {
      const title = post.title?.[locale] || post.title?.vi || post.title?.en || '';
      return title.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 animate-in">
      <div className="mb-20 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 tracking-tighter">{t('blogTitle')}</h1>
        <p className="text-2xl text-gray-300 font-medium max-w-3xl leading-relaxed mx-auto md:mx-0">{t('blogSub')}</p>
        {/* Category tags */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-8 mb-6">
          <button
            className={`px-4 py-1.5 rounded-full font-bold border transition-all text-sm ${selectedCategory === null ? 'bg-pink-300 text-white border-pink-300' : 'bg-white text-pink-300 border-pink-100 hover:bg-pink-50'}`}
            onClick={() => setSelectedCategory(null)}
          >
            Tất cả
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full font-bold border transition-all text-sm ${selectedCategory === cat ? 'bg-pink-300 text-white border-pink-300' : 'bg-white text-pink-300 border-pink-100 hover:bg-pink-50'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Search input with icon */}
        <div className="flex justify-center md:justify-start mb-8">
          <div className="relative w-full max-w-xs">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-200">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm tiêu đề..."
              className="w-full pl-10 pr-4 py-2 border border-pink-100 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-200 text-gray-700"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-20">
        {filteredPosts.map(post => (
          <article key={post.id} className="group grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <Link to={`/blog/${post.id}`} className="md:col-span-5 aspect-[4/3] rounded-[4rem] overflow-hidden shadow-xl group-hover:shadow-pink-50 transition-all">
              <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0" alt={post.title?.[locale] || post.title?.vi || post.title?.en || ''} />
            </Link>
            <div className="md:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 group-hover:text-pink-300 transition-colors tracking-tight leading-tight">
                {post.title?.[locale] || post.title?.vi || post.title?.en || ''}
              </h2>
              <p className="text-lg text-gray-400 font-medium mb-8 line-clamp-3">{post.excerpt?.[locale] || post.excerpt?.vi || post.excerpt?.en || ''}</p>
              <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-4 text-xs font-black text-pink-300 uppercase tracking-widest group-hover:gap-6 transition-all">
                {t('readMore')} <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const Certs: React.FC = () => {
  const { locale, t } = useLanguage();
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 animate-in">
      <div className="mb-20 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 tracking-tighter">{t('navCert')}</h1>
        <p className="text-2xl text-gray-300 font-medium max-w-3xl leading-relaxed mx-auto md:mx-0">{t('certSub')}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATIONS.map(cert => (
          <CertCard key={cert.id} cert={cert} locale={locale} />
        ))}
      </div>
    </div>
  );
}

// Component riêng cho từng chứng chỉ để đảm bảo state hoạt động đúng
function CertCard(props) {
  const { cert, locale } = props;
  const [showImg, setShowImg] = React.useState(false);
  return (
    <>
      <div className="liquid-card rounded-[3rem] overflow-hidden group hover:bg-white/60 transition-all">
        <div className="aspect-square overflow-hidden cursor-zoom-in" onClick={() => setShowImg(true)}>
          <img src={cert.image} alt={cert.title?.[locale] || cert.title?.vi || cert.title?.en || ''} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" />
        </div>
        <div className="p-8">
          <p className="text-[10px] font-black uppercase tracking-widest text-pink-300 mb-2">{cert.issuer} • {cert.date}</p>
          <h3 className="text-xl font-black text-gray-900 leading-snug mb-2">{cert.title?.[locale] || cert.title?.vi || cert.title?.en || ''}</h3>
          {cert.reflection && (
            <p className="text-gray-500 text-base leading-relaxed mt-2">{cert.reflection?.[locale] || cert.reflection?.vi || cert.reflection?.en || ''}</p>
          )}
        </div>
      </div>
      {showImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setShowImg(false)}>
          <img src={cert.image} alt={cert.title?.[locale] || cert.title?.vi || cert.title?.en || ''} className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl border-8 border-white" />
        </div>
      )}
    </>
  );
}

const Contact: React.FC = () => {
  const { locale, t } = useLanguage();
  
  const socialCards = [
    {
      name: "GitHub",
      url: PROFILE_DATA.links.github,
      icon: <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    },
    {
      name: "Facebook",
      url: PROFILE_DATA.links.facebook,
      icon: <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    },
    {
      name: "Gmail",
      url: `mailto:${PROFILE_DATA.links.email}`,
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    },
    {
      name: locale === 'vi' ? 'Số điện thoại' : 'Phone',
      url: `tel:${PROFILE_DATA.links.phone.replace(/\s/g, '')}`,
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-24 animate-in">
      <div className="mb-24 text-center">
        <h1 className="text-7xl md:text-8xl font-black text-gray-900 mb-10 tracking-tighter">
          {t('contactTitle')}
        </h1>
        <p className="text-2xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
          {t('contactSub')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {socialCards.map((card, idx) => (
          <a 
            key={idx}
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-12 bg-white/50 backdrop-blur-xl border border-gray-50 rounded-[3.5rem] flex flex-col items-center justify-center gap-6 hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)]"
          >
            <div className="text-gray-400 group-hover:text-pink-300 transition-colors">
              {card.icon}
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tight">{card.name}</span>
          </a>
        ))}
      </div>

      <div className="mt-32 p-12 bg-pink-50/20 rounded-[4rem] border border-white flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-4">
          <p className="text-[11px] font-black uppercase tracking-widest text-pink-300">Thông tin cá nhân</p>
          <p className="text-lg font-bold text-gray-700">{PROFILE_DATA.links.address}</p>
          <p className="text-lg font-bold text-gray-700">{PROFILE_DATA.links.email}</p>
        </div>
        <div className="relative w-40 h-40">
           <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
           <img src={PROFILE_DATA.avatar} className="relative w-full h-full rounded-full object-cover border-8 border-white shadow-xl" alt="Contact Avatar" />
        </div>
      </div>
    </div>
  );
};

const BlogPostDetail: React.FC = () => {
  const { locale, t } = useLanguage();
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) return <div className="p-20 text-center font-black text-3xl">{t('postNotFound')}</div>;

  const safeTitle = post.title?.[locale] || post.title?.vi || post.title?.en || '';
  const safeReadTime = post.readTime?.[locale] || post.readTime?.vi || post.readTime?.en || '';
  const safeContent = post.content?.[locale] || post.content?.vi || post.content?.en || '';

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 animate-in">
      <Link to="/blog" className="inline-flex items-center gap-3 text-xs font-black text-gray-300 hover:text-pink-300 transition-all uppercase tracking-widest mb-16">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
        {t('backToBlog')}
      </Link>
      
      <header className="mb-24">
        <div className="flex items-center gap-6 mb-10">
          <span className={`px-6 py-2 text-[11px] font-black uppercase tracking-widest rounded-full border shadow-sm ${getCategoryStyles(post.category)}`}>
            {post.category}
          </span>
          <span className="text-gray-200 font-black text-xs uppercase tracking-widest">{post.date} • {safeReadTime}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-16 tracking-tighter leading-[1.1]">
          {safeTitle}
        </h1>
        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl">
          <img src={post.image} className="w-full aspect-video object-cover grayscale-[0.2]" alt={safeTitle} />
        </div>
      </header>

      <div className="blog-content">
        {renderPostContent(safeContent, locale)}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-24 border-t border-pink-50 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h3 className="text-2xl font-black text-pink-300 tracking-tighter mb-2">NhuY.</h3>
          <p className="text-sm font-bold text-gray-400">{t('footerCredit')}</p>
        </div>
        <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-gray-400">
          <a href={PROFILE_DATA.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">GitHub</a>
          <a href={PROFILE_DATA.links.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">Facebook</a>
          <Link to="/contact" className="hover:text-pink-300">{t('navContact')}</Link>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#fffcfd]">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPostDetail />} />
              <Route path="/certs" element={<Certs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

// Helper: render post content with support for code fences (~~~lang ... ~~~), headings (## ), and paragraphs.
function renderPostContent(raw: string, locale: 'vi' | 'en') {
  const elements: React.ReactNode[] = [];
  let idx = 0;
  const codeFence = /~~~(\w+)?\n([\s\S]*?)\n~~~/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const pushTextBlocks = (text: string) => {
    const parts = text.split('\n\n').map(p => p.trim()).filter(Boolean);
    for (const part of parts) {
      const imgMatch = part.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imgMatch) {
        const [, alt, src] = imgMatch;
        elements.push(
          <div key={`img-${idx++}`} className="my-8">
            <img src={src} alt={alt} className="w-full rounded-xl object-cover shadow-lg" />
          </div>
        );
        continue;
      }

      const captionMatch = part.match(/^\*(.*?)\*$/s);
      if (captionMatch) {
        const caption = captionMatch[1].trim();
        elements.push(
          <p key={`cap-${idx++}`} className="italic-caption">{caption}</p>
        );
        continue;
      }

      if (part.startsWith('## ')) {
        elements.push(<h2 key={`h-${idx++}`} className="text-2xl font-black mt-12 mb-6 text-gray-900 tracking-tight border-l-4 border-pink-200 pl-4">{part.replace(/^##\s*/, '')}</h2>);
      } else {
        elements.push(<p key={`p-${idx++}`} className="mb-6 leading-[1.8] text-gray-500 text-lg font-medium">{part}</p>);
      }
    }
  };

  while ((match = codeFence.exec(raw)) !== null) {
    const [full, lang, code] = match;
    const start = match.index;
    if (start > lastIndex) {
      const preceding = raw.slice(lastIndex, start);
      pushTextBlocks(preceding);
    }

    const codeText = code.replace(/^\n|\n$/g, '');
    const key = `code-${idx++}`;
    elements.push(
      <div key={key} className="relative my-8">
        <pre className="rounded-xl border border-gray-100 bg-gray-900 text-gray-100 overflow-auto p-6 leading-relaxed"><code>{codeText}</code></pre>
        <button
          aria-label="Copy code"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            const btn = e.currentTarget as HTMLButtonElement;
            const origText = btn.innerText;
            navigator.clipboard.writeText(codeText).then(() => {
              btn.classList.add('copied');
              btn.innerText = '✓';
              setTimeout(() => {
                btn.classList.remove('copied');
                btn.innerText = origText;
              }, 1800);
            }).catch(() => {
              // ignore errors
            });
          }}
          className="copy-btn"
        >
          Copy
        </button>
      </div>
    );

    lastIndex = match.index + full.length;
  }

  if (lastIndex < raw.length) {
    pushTextBlocks(raw.slice(lastIndex));
  }

  return elements;
}
