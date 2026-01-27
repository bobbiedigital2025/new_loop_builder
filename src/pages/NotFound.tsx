import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#722f37] via-[#8b3a62] to-[#d4af37] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white/20 mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-white/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button
          onClick={() => navigate('/')}
          size="lg"
          className="bg-white text-[#722f37] hover:bg-white/90 font-bold"
        >
          <Home className="mr-2 h-5 w-5" />
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
