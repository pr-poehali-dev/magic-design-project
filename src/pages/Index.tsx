import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const rituals = [
    {
      title: "Привлечение любви",
      description: "Древний ритуал для привлечения истинной любви в вашу жизнь",
      price: "15 000 ₽",
      duration: "3 дня",
      icon: "Heart"
    },
    {
      title: "Финансовое благополучие", 
      description: "Мощный обряд для привлечения денежного потока и процветания",
      price: "20 000 ₽",
      duration: "7 дней",
      icon: "Coins"
    },
    {
      title: "Защита от порчи",
      description: "Очистительный ритуал и постановка защиты от негативного воздействия",
      price: "12 000 ₽", 
      duration: "1 день",
      icon: "Shield"
    },
    {
      title: "Гадание на Таро",
      description: "Подробное раскладывание карт Таро на интересующий вопрос",
      price: "5 000 ₽",
      duration: "1 час",
      icon: "Eye"
    }
  ];

  const reviews = [
    {
      name: "Мария К.",
      text: "Елена помогла мне вернуть любимого человека. Через месяц он сам написал и попросил прощения!",
      rating: 5,
      date: "2 недели назад"
    },
    {
      name: "Александр В.", 
      text: "Ритуал на деньги сработал невероятно! Получил повышение на работе и крупную премию.",
      rating: 5,
      date: "1 месяц назад"
    },
    {
      name: "Светлана Д.",
      text: "Очень точное гадание на Таро. Все предсказания сбылись в точности!",
      rating: 5, 
      date: "3 недели назад"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-mystic-light">
              Магические Услуги
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Древние знания цыганских традиций для решения ваших жизненных вопросов
            </p>
            <Button 
              size="lg" 
              className="bg-mystic-light hover:bg-mystic-light/90 text-mystic-dark font-semibold px-8 py-4 text-lg mystic-glow"
            >
              <Icon name="Sparkles" className="mr-2" size={20} />
              Записаться на консультацию
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-mystic-light" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-mystic-light">
              Обо мне
            </h2>
            <div className="w-24 h-1 bg-mystic-light mx-auto mb-8"></div>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-mystic-light/20 mystic-glow">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-mystic-light/30">
                  <img 
                    src="img/c29daa29-b035-4cd7-81c5-79ddbaf3e144.jpg" 
                    alt="Елена Таборская - потомственная цыганка" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-mystic-light">
                    Елена Таборская
                  </h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Потомственная цыганка в седьмом поколении. Владею древними знаниями 
                    и секретами, передающимися в нашем роду веками. Более 15 лет помогаю 
                    людям решать жизненные проблемы с помощью магических практик.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge variant="secondary" className="bg-mystic-light/20 text-mystic-light">
                      15+ лет опыта
                    </Badge>
                    <Badge variant="secondary" className="bg-mystic-light/20 text-mystic-light">
                      1000+ довольных клиентов
                    </Badge>
                    <Badge variant="secondary" className="bg-mystic-light/20 text-mystic-light">
                      Потомственная магия
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-mystic-dark/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-mystic-light">
              Ритуалы и услуги
            </h2>
            <div className="w-24 h-1 bg-mystic-light mx-auto mb-8"></div>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Каждый ритуал проводится индивидуально с учетом вашей особой ситуации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {rituals.map((ritual, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-mystic-light/20 hover:mystic-glow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-mystic-light/20 rounded-full flex items-center justify-center group-hover:bg-mystic-light/30 transition-colors">
                      <Icon name={ritual.icon} size={24} className="text-mystic-light" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-playfair text-mystic-light">
                        {ritual.title}
                      </CardTitle>
                      <div className="flex gap-4 text-sm text-foreground/70">
                        <span>💰 {ritual.price}</span>
                        <span>⏱️ {ritual.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-6">{ritual.description}</p>
                  <Button className="w-full bg-mystic-light hover:bg-mystic-light/90 text-mystic-dark font-semibold">
                    Заказать ритуал
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-mystic-light">
              Отзывы клиентов
            </h2>
            <div className="w-24 h-1 bg-mystic-light mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-mystic-light/20 hover:mystic-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-mystic-light fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{review.text}"</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-mystic-light">{review.name}</span>
                    <span className="text-sm text-foreground/60">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-mystic-dark/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-mystic-light">
              Контакты
            </h2>
            <div className="w-24 h-1 bg-mystic-light mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-mystic-light/20 mystic-glow">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-6 text-mystic-light">
                  Свяжитесь со мной
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Icon name="Phone" className="text-mystic-light" size={20} />
                    <span className="text-lg">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Mail" className="text-mystic-light" size={20} />
                    <span className="text-lg">elena@magicservices.ru</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="MapPin" className="text-mystic-light" size={20} />
                    <span className="text-lg">Москва, м. Китай-город</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Clock" className="text-mystic-light" size={20} />
                    <span className="text-lg">Ежедневно 10:00 - 22:00</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-mystic-light/20">
                  <p className="text-foreground/80 mb-4">
                    Консультация проводится лично или онлайн. Первичная консультация бесплатна.
                  </p>
                  <Button className="w-full bg-mystic-light hover:bg-mystic-light/90 text-mystic-dark font-semibold">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Написать в WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-mystic-light/20">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-6 text-mystic-light">
                  Важная информация
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-mystic-light/10 rounded-lg border border-mystic-light/20">
                    <h4 className="font-semibold text-mystic-light mb-2">🔮 Гарантия результата</h4>
                    <p className="text-sm text-foreground/80">
                      При отсутствии результата в течение указанного срока - возврат 50% суммы
                    </p>
                  </div>
                  <div className="p-4 bg-mystic-light/10 rounded-lg border border-mystic-light/20">
                    <h4 className="font-semibold text-mystic-light mb-2">🕯️ Конфиденциальность</h4>
                    <p className="text-sm text-foreground/80">
                      Полная анонимность и неразглашение информации о клиентах
                    </p>
                  </div>
                  <div className="p-4 bg-mystic-light/10 rounded-lg border border-mystic-light/20">
                    <h4 className="font-semibold text-mystic-light mb-2">⭐ Индивидуальный подход</h4>
                    <p className="text-sm text-foreground/80">
                      Каждый ритуал адаптируется под конкретную ситуацию клиента
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mystic-dark text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-mystic-light/80">
            © 2024 Елена Таборская. Магические услуги. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;