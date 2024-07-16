import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from '../../components/Skills';
import { skills } from '../../components/Skills/data'

describe('Skills Component', () => {
    let container
    beforeEach(() => {
        const { container: ct } = render(
          <Skills
          />
        );
        container = ct
      });
  it('renders the Skills section header', () => {
    const skillsHeader = screen.getByText(/What I Can Do/i);
    expect(skillsHeader).toBeInTheDocument();
  });

  it('renders Cards for each skill', () => {
    skills.forEach(skill => {
      const cardContent = screen.getByText(skill.title);
      expect(cardContent).toBeInTheDocument();
    });
  });
});
