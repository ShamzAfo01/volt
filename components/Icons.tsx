import React from 'react';
import { Zap, Globe, Code, ArrowRight, X, List } from 'lucide-react';

export const IconLightning = () => <Zap className="w-8 h-8" fill="currentColor" />;
// Mapping Lucide icons to look like the requested concepts
export const IconZap = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
export const IconGlobe = ({ className }: { className?: string }) => <Globe className={className} />;
export const IconCode = ({ className }: { className?: string }) => <Code className={className} />;
export const IconArrowRight = ({ className }: { className?: string }) => <ArrowRight className={className} />;
export const IconMenu = ({ className }: { className?: string }) => <List className={className} />;
export const IconClose = ({ className }: { className?: string }) => <X className={className} />;