import React, { useState } from 'react';
import { 
  Search, Moon, User, Music, Mic, BookOpen, 
  FileText, Bookmark, Download, Headphones, 
  ChevronRight, Flame, MessageSquare, Play, Menu, X
} from 'lucide-react';

const CATEGORIES = [
  { id: 1, name: 'Piano', count: '1.200+', icon: <Music className="w-8 h-8 text-blue-500" /> },
  { id: 2, name: 'Guitar', count: '980+', icon: <Music className="w-8 h-8 text-orange-500" /> },
  { id: 3, name: 'Drum', count: '650+', icon: <Music className="w-8 h-8 text-green-500" /> },
  { id: 4, name: 'Vocal', count: '420+', icon: <Mic className="w-8 h-8 text-purple-500" /> },
  { id: 5, name: 'Nhạc lý', count: '310+', icon: <Music className="w-8 h-8 text-red-500" /> },
  { id: 6, name: 'Tài liệu khác', count: '280+', icon: <BookOpen className="w-8 h-8 text-gray-500" /> },
];

const NEW_SONGS = [
  {
    id: 1,
    title: 'Có Chàng Trai Viết Lên Cây',
    artist: 'Phan Mạnh Quỳnh',
    tags: [{ name: 'Piano', color: 'text-red-500 bg-red-50' }, { name: 'Ballad', color: 'text-blue-500 bg-blue-50' }, { name: 'Level 3', color: 'text-gray-500 bg-gray-100' }],
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'See You Again',
    artist: 'Wiz Khalifa',
    tags: [{ name: 'Guitar', color: 'text-orange-500 bg-orange-50' }, { name: 'Pop', color: 'text-blue-500 bg-blue-50' }, { name: 'Level 2', color: 'text-gray-500 bg-gray-100' }],
    image: 'https://images.unsplash.com/photo-1614680376573-3e4e1202bc59?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Một mặt trời không có đơn',
    artist: '(Sáng tác)',
    tags: [{ name: 'Piano', color: 'text-red-500 bg-red-50' }, { name: 'Ballad', color: 'text-blue-500 bg-blue-50' }, { name: 'Level 3', color: 'text-gray-500 bg-gray-100' }],
    image: 'https://images.unsplash.com/photo-1478147424096-f65b58ef56d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Faded',
    artist: 'Alan Walker',
    tags: [{ name: 'Drum', color: 'text-green-500 bg-green-50' }, { name: 'EDM', color: 'text-purple-500 bg-purple-50' }, { name: 'Level 3', color: 'text-gray-500 bg-gray-100' }],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Hãy Trao Cho Anh',
    artist: 'Sơn Tùng M-TP',
    tags: [{ name: 'Guitar', color: 'text-orange-500 bg-orange-50' }, { name: 'Pop', color: 'text-blue-500 bg-blue-50' }, { name: 'Level 2', color: 'text-gray-500 bg-gray-100' }],
    image: 'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  }
];

const GENRES = [
  { id: 1, name: 'Ballad', image: 'https://images.unsplash.com/photo-1493225457124-a1a2a5fdf68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Pop', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Rock', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Jazz', image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Classical', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#111111] text-white border-b border-gray-800">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded-lg">
              <Music className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="font-bold text-xl leading-tight">Music Sheet Library</h1>
              <p className="text-xs text-gray-400">Play • Learn • Grow</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white font-medium border-b-2 border-white pb-1">Trang chủ</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Thư viện</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
              Theo nhạc cụ <ChevronRight className="w-4 h-4 rotate-90" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
              Theo thể loại <ChevronRight className="w-4 h-4 rotate-90" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
              Tài liệu <ChevronRight className="w-4 h-4 rotate-90" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-gray-300 hover:text-white">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <Moon className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 bg-transparent border border-gray-600 hover:border-gray-400 px-4 py-2 rounded-full transition-colors">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Đăng nhập</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-[#1a1a1a] p-4 space-y-4">
          <a href="#" className="block text-white">Trang chủ</a>
          <a href="#" className="block text-gray-300">Thư viện</a>
          <a href="#" className="block text-gray-300">Theo nhạc cụ</a>
          <a href="#" className="block text-gray-300">Theo thể loại</a>
          <a href="#" className="block text-gray-300">Tài liệu</a>
          <a href="#" className="block text-gray-300">Blog</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative bg-[#111111] py-20 px-4 md:px-8 overflow-hidden">
      {/* Background decoration - mimicking a piano/music studio vibe */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Piano background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="max-w-2xl">
          <p className="text-gray-300 tracking-widest text-sm font-semibold mb-4 uppercase">
            Kho tài liệu âm nhạc miễn phí
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Music Sheet <span className="text-[#facc15]">Library</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Hàng nghìn sheet nhạc, hợp âm, tài liệu học nhạc chất lượng cao.<br/>
            Dành cho mọi người yêu âm nhạc.
          </p>

          {/* Search Bar */}
          <div className="relative flex items-center bg-[#222222] border border-gray-700 rounded-full p-1 mb-6 shadow-xl">
            <Search className="w-5 h-5 text-gray-400 ml-4 mr-2" />
            <input 
              type="text" 
              placeholder="Tìm kiếm bài hát, nghệ sĩ, nhạc cụ, thể loại..." 
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 py-3"
            />
            <button className="bg-[#facc15] hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full transition-colors mr-1">
              Tìm kiếm
            </button>
          </div>

          {/* Trending Searches */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center text-[#facc15] text-sm font-medium mr-2">
              <Flame className="w-4 h-4 mr-1" /> Tìm kiếm nhiều:
            </div>
            {['Piano', 'Guitar', 'Drum', 'Sheet nhạc Việt', 'Ballad', 'Pop'].map((tag) => (
              <span key={tag} className="bg-white/10 hover:bg-white/20 cursor-pointer border border-gray-700 text-gray-300 text-sm px-4 py-1.5 rounded-full transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryGrid = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 -mt-10 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-3">
              {cat.icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
            <p className="text-xs text-gray-500">{cat.count} tài liệu</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SongCard = ({ song }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img 
        src={song.image} 
        alt={song.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
          <Play className="w-4 h-4 text-gray-900 ml-1" />
        </div>
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{song.title}</h3>
      <p className="text-xs text-gray-500 mb-3">{song.artist}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {song.tags.map((tag, idx) => (
          <span key={idx} className={`text-[10px] font-medium px-2 py-1 rounded-md ${tag.color}`}>
            {tag.name}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
            <FileText className="w-4 h-4" />
            <span className="text-xs font-medium">PDF</span>
          </button>
          <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
            <Headphones className="w-4 h-4" />
            <span className="text-xs font-medium">Audio</span>
          </button>
        </div>
        <button className="text-gray-400 hover:text-gray-900 transition-colors">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      <Navbar />
      <Hero />
      <CategoryGrid />
      
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content Area (Left) */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* New Updates Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-[#facc15] rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900">Bài mới cập nhật</h2>
                </div>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Xem tất cả <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {NEW_SONGS.map((song) => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            </section>

            {/* Genre Library Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-[#facc15] rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-900">Thư viện theo thể loại</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {GENRES.map((genre) => (
                  <div key={genre.id} className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group">
                    <img src={genre.image} alt={genre.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold text-lg">{genre.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
          </div>

          {/* Sidebar (Right) */}
          <div className="space-y-6">
            
            {/* Quote Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
              <p className="text-gray-600 italic leading-relaxed relative z-10">
                "Âm nhạc không chỉ là những nốt nhạc, mà là cách chúng ta cảm nhận cuộc sống."
              </p>
              <Music className="w-16 h-16 text-gray-50 absolute -bottom-2 -right-2 -rotate-12" />
              <div className="mt-4 flex justify-end">
                <Music className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Quick Filters Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-5">
                <Menu className="w-5 h-5" /> Lọc nhanh
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Nhạc cụ</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Piano', 'Guitar', 'Drum', 'Vocal', 'Khác'].map(tag => (
                      <button key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Thể loại</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Ballad', 'Pop', 'Rock', 'Jazz', 'Classical', 'EDM', 'Khác'].map(tag => (
                      <button key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Độ khó</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Dễ', 'Trung bình', 'Khó'].map(tag => (
                      <button key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors">
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contribute CTA */}
            <div className="bg-[#eff6ff] p-6 rounded-2xl border border-blue-100 cursor-pointer hover:bg-blue-50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-1 group-hover:text-blue-700 transition-colors">
                    Đóng góp tài liệu <ChevronRight className="w-4 h-4" />
                  </h3>
                  <p className="text-sm text-gray-600">Bạn có sheet nhạc muốn chia sẻ? Hãy gửi cho chúng tôi!</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}