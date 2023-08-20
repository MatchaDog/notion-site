import { BG } from '@/components/bg/bg';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export const Layout: React.FC<{
  children: React.ReactNode;
  hideFooter?: boolean;
  contentStyle?: React.CSSProperties;
}> = ({ children, hideFooter, contentStyle }) => {
  return (
    <BG>
      <Header />
      <div
        style={
          contentStyle
            ? {
                minHeight: 'calc(100vh - 240px)',
                ...contentStyle,
              }
            : {
                minHeight: 'calc(100vh - 240px)',
              }
        }
        className="container max-w-[900px]"
      >
        {children}
      </div>
      {!hideFooter && <Footer />}
    </BG>
  );
};
