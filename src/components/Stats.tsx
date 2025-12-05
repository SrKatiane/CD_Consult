import { useEffect, useState, useRef } from "react";
import { Users, Briefcase, Award, Globe, TrendingUp } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, value: 200, label: "Clientes Atendidos", prefix: "+" },
    { icon: Briefcase, value: 60, label: "Projetos Desenvolvidos", prefix: "+" },
    { icon: Award, value: 40, label: "Anos de Mercado", prefix: "+" },
    { icon: Globe, value: 2, label: "Países em que Atuamos", prefix: "" },
  ];

  const Counter = ({ end, duration = 2000, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
      <span>
        {prefix}
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
          Por Que Escolher a CD Consult?
        </h2>
        <p className="text-center text-sm md:text-base text-muted-foreground mb-12 max-w-2xl mx-auto">
          Números que demonstram nossa expertise e comprometimento com a excelência
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-primary" />
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                <Counter end={stat.value} prefix={stat.prefix} />
              </div>
              <div className="text-xs md:text-sm lg:text-base text-muted-foreground px-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;