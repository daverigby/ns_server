CONFIGURE_FILE("${CMAKE_CURRENT_SOURCE_DIR}/src/ale.app.src.in"
  "${CMAKE_CURRENT_SOURCE_DIR}/src/ale.app.src" @ONLY)

REBAR (TARGET ale)
ADD_DEPENDENCIES (ns_realclean ale-clean)
INSTALL (DIRECTORY ebin DESTINATION "${INST_LIBDIR}/ale")

