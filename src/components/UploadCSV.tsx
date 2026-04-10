import React, { useCallback, useState } from 'react';
import { Upload, FileText, Download, X } from 'lucide-react';
import { Button } from './ui/button';

interface UploadCSVProps {
  onFileSelect?: (file: File) => void;
  onSampleDownload?: () => void;
}

export function UploadCSV({ onFileSelect, onSampleDownload }: UploadCSVProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type === 'text/csv' || file.name.endsWith('.csv') || file.type === 'application/json' || file.name.endsWith('.json')) {
        setSelectedFile(file);
        onFileSelect?.(file);
      }
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      onFileSelect?.(file);
    }
  }, [onFileSelect]);

  const handleRemoveFile = useCallback(() => {
    setSelectedFile(null);
  }, []);

  const handleSampleDownload = useCallback(() => {
    onSampleDownload?.();
    // Mock download
    const sampleData = `System Name,Last Patch Date,OS Version,Criticality
WEB-SERVER-01,2025-10-15,Ubuntu 22.04,High
DB-PROD-02,2025-09-28,Windows Server 2019,Critical
APP-SERVER-03,2025-10-18,CentOS 8,Medium`;
    
    const blob = new Blob([sampleData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sample-systems.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, [onSampleDownload]);

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-foreground mb-1">Upload System Data</h3>
            <p className="text-sm text-muted-foreground">
              Upload CSV or JSON file with system inventory and patch history
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleSampleDownload}
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Sample File
          </Button>
        </div>

        {!selectedFile ? (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 transition-all ${
              isDragging
                ? 'border-primary bg-primary/5'
                : 'border-border bg-muted/20 hover:border-primary/50 hover:bg-muted/30'
            }`}
          >
            <Upload className={`h-12 w-12 mb-4 ${isDragging ? 'text-primary' : 'text-muted-foreground'}`} />
            <p className="text-foreground mb-2">
              Drag and drop your file here
            </p>
            <p className="text-sm text-muted-foreground mb-4">or</p>
            <label htmlFor="file-upload">
              <Button
                type="button"
                onClick={() => document.getElementById('file-upload')?.click()}
                className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                <Upload className="h-4 w-4" />
                Browse Files
              </Button>
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".csv,.json"
              onChange={handleFileInput}
              className="hidden"
            />
            <p className="text-xs text-muted-foreground mt-4">
              Supported formats: CSV, JSON (Max 10MB)
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-between rounded-lg border border-border bg-muted/20 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRemoveFile}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
