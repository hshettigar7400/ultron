const config = {
  window: {
    /**
     * Maximum width of the framework. if framework width is set less than browser width framework will be set horizontal center and user will see gutter space. Only applicable for desktop.
     * value can be in 'px' or in '%'
     */
    maxWidth: '1010px',
    /**
     * Maximum height of the framework in 'px' or '%'. This value is used for desktop layouts only.
     */
    maxHeight: '650px',
    /**
     * Minimum width of the framework in 'px' or '%'. Only applicable for desktop.
     */
    minWidth: '320px'
  },
  course: {
    logoURL: '',
    /* page Completion
     * 1: on page load
     * 2: on completion of page interactions
     */
    pageCompletion: 1,
    /* courseCompletion
     *  1: Depend on all pages completion.
     *  2: Depend on user score >= 'passingScore.
     *  3: Depend on both, pages completion and user score >= 'passingScore.
     */
    courseCompletion: 2,
    /* navigationControl
     *  1: 'pagewise',
     *  2: 'visulamenu
     */
    navigationControl: 1,
    /* pageIndicatorType
     * 1: 'coursewise',
     * 2: 'topicwise'
    */
    pageIndicatorType: 1,
    /* openingPage
     * 1: 'Intro',
     * 2: 'languageSelection',
     * 3: 'Language and Intro'
    */
    openingPage: 2,
    /* contentSync
     * true: Course has Audio,
     * false: Course does not have Audio
    */
    contentSync: true,
    /* hasAssessment
     * true: Course has Assessment
     * false: Course does not have Assessment
    */
    hasAssessment: false,
    /* hasVisualMenu
     * true: Course has Visual Menu
     * false: Course does not have Visual Menu
    */
    hasVisualMenu: false
  },
  tracking: {
      /* Status
       * 1: incomplete/completed
       * 2: incomplete/passed/failed
       */
      status: 1,
      /* ComplianceType
       * 1: STANDALONE
       * 2: SCORM1.2
       * 3: SCORM2004
       * 4: LocalStorage
       */
      complianceType: 1,

      passingScore: 75
  }
};

module.exports = {
  config
}
