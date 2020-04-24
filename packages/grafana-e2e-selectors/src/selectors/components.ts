import { selectorFactory } from '../types';

export const Components = {
  DataSource: {
    TestData: {
      QueryTab: selectorFactory({
        scenarioSelect: 'Test Data Query scenario select',
        max: 'TestData max',
        min: 'TestData min',
        noise: 'TestData noise',
        seriesCount: 'TestData series count',
        spread: 'TestData spread',
        startValue: 'TestData start value',
      }),
    },
  },
  Panels: {
    Panel: selectorFactory({
      title: (title: string) => `Panel header title item ${title}`,
      headerItems: (item: string) => `Panel header item ${item}`,
    }),
    Visualization: {
      Graph: {
        VisualizationTab: selectorFactory({
          legendSection: 'Legend section',
        }),
        Legend: selectorFactory({
          legendItemAlias: (name: string) => `gpl alias ${name}`,
          showLegendSwitch: 'gpl show legend',
        }),
      },
    },
  },
  Drawer: {
    General: selectorFactory({
      title: (title: string) => `Drawer title ${title}`,
      expand: 'Drawer expand',
      contract: 'Drawer contract',
      close: 'Drawer close',
      rcContentWrapper: () => '.drawer-content-wrapper',
    }),
  },
  PanelInspector: {
    Data: selectorFactory({
      content: 'Panel inspector Data content',
    }),
    Stats: selectorFactory({
      content: 'Panel inspector Stats content',
    }),
    Json: selectorFactory({
      content: 'Panel inspector Json content',
    }),
    Query: selectorFactory({
      content: 'Panel inspector Query content',
    }),
  },
  Tab: selectorFactory({
    title: (title: string) => `Tab ${title}`,
    active: () => '[class*="-activeTabStyle"]',
  }),
  QueryEditorToolbarItem: selectorFactory({
    button: (title: string) => `QueryEditor toolbar item button ${title}`,
  }),
  BackButton: selectorFactory({
    backArrow: 'Go Back button',
  }),
};
