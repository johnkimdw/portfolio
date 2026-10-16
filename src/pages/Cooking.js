import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useDesign } from '../contexts/DesignContext';
import cookingData from '../data/cooking';
import { COOKING_LAYOUTS } from '../components/cooking/layouts';
import Lightbox from '../components/cooking/Lightbox';
import LayoutSwitcher from '../components/LayoutSwitcher';
import '../components/cooking/cooking.css';

export default function Cooking() {
  const { colors } = useTheme();
  const { cooking, setCooking } = useDesign();
  const [open, setOpen] = useState(null);
  const Layout = (COOKING_LAYOUTS[cooking] || COOKING_LAYOUTS.grid).component;

  return (
    <div className="space-y-8 py-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-base font-sans" style={{ color: colors.text }}>
          cooking
        </h1>
        <p className="text-base font-sans max-w-md mx-auto" style={{ color: colors.textMuted }}>
          some dishes i've made to save $$ (and i like cooking)
        </p>
      </section>

      <LayoutSwitcher options={COOKING_LAYOUTS} value={cooking} onChange={setCooking} />

      <section>
        <Layout dishes={cookingData} onOpen={setOpen} />
      </section>

      {open !== null && (
        <Lightbox dishes={cookingData} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      )}

      {/* Footer note */}
      <section className="text-center pt-8">
        <p
          className="text-sm font-sans italic"
          style={{ color: colors.textMuted, opacity: 0.6 }}
        >
          cooking more stuff up :)
        </p>
      </section>
    </div>
  );
}
