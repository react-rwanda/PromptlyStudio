// Common API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
    details?: any;
  };
  meta?: {
    timestamp: string;
    requestId?: string;
  };
}

// Health Check Types
export interface HealthCheck {
  status: 'ok' | 'error';
  timestamp: string;
  uptime: number;
  environment: string;
  version: string;
}

// Code Generation Types
export interface CodegenRequest {
  prompt: string;
  framework?: 'react-tailwind' | 'vue-tailwind' | 'angular-tailwind';
  options?: {
    style?: 'modern' | 'minimal' | 'corporate';
    components?: string[];
    accessibility?: boolean;
    responsive?: boolean;
  };
}

export interface CodegenResponse {
  jobId?: string;
  code?: string;
  files?: Array<{
    path: string;
    content: string;
    type: 'component' | 'style' | 'config';
  }>;
  metadata?: {
    framework: string;
    componentsUsed: string[];
    estimatedTime: number;
  };
}

// Figma Import Types
export interface FigmaImportRequest {
  fileKey: string;
  nodeIds?: string[];
  options?: {
    includeAssets?: boolean;
    generateResponsive?: boolean;
  };
}

// Export Types
export interface ExportRequest {
  projectId: string;
  format: 'zip' | 'github' | 'codesandbox';
  options?: {
    includeReadme?: boolean;
    includePackageJson?: boolean;
  };
}

// User Types (for future auth implementation)
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Project Types
export interface Project {
  id: string;
  name: string;
  description?: string;
  userId: string;
  framework: string;
  files: ProjectFile[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectFile {
  id: string;
  path: string;
  content: string;
  type: 'component' | 'style' | 'config' | 'asset';
  size: number;
  createdAt: Date;
  updatedAt: Date;
}