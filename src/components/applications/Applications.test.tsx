import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Applications from './Applications';

describe('Applications Component', () => {
    it('loads and displays first 5 applications', async () => {
      render(<Applications />);
  
      await waitFor(() => screen.getByText('Sherman Gerlach'));
  
      expect(screen.getByText('Edmund Bode')).toBeInTheDocument();
      expect(screen.getByText('Owen Abernathy')).toBeInTheDocument();
      expect(screen.getByText('Lila Volkman')).toBeInTheDocument();
      expect(screen.getByText('Bryce Mertz')).toBeInTheDocument();
    });
  
    it('loads more applications when the button Load More is clicked', async () => {
      render(<Applications />);
  
      await waitFor(() => screen.getByText('Edmund Bode'));
  
      const loadMoreButton = screen.getByText('Load More');
      fireEvent.click(loadMoreButton);
  
      await waitFor(() => screen.getByText('Roberto Rolfson'));
      expect(screen.getByText('Citlalli Monahan')).toBeInTheDocument();
      expect(screen.getByText('Lacey Bode')).toBeInTheDocument();
      expect(screen.getByText('Meagan Haley')).toBeInTheDocument();
      expect(screen.getByText('Gabe Torp')).toBeInTheDocument();
    });
  });