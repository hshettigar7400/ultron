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
    pageCompletionIndicatorOnPage: false,
    /* navigationControl
     *  1: 'course',
     *  2: 'module'
     *  3: 'section'
     *  4: 'topic'
     */
    navigationControl: 1,
    /* openinPage
     * 1: 'Intro',
     * 2: 'languageSelection',
     * 3: 'Language and Intro'
    */
    openinPage: 1,
    /* contentSync
     * true: Course has Audio,
     * false: Course does not have Audio
    */
    contentSync: true,
    /* hasAssessment
     * true: Course has Assessment
     * false: Course does not have Assessment
    */
    hasAssessment: false
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
